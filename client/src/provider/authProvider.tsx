import React from "react";
import {
  getRefreshTokenExpiryTime,
  setJWT,
  setRefreshTokenExpiryTime,
} from "../helpers";

type Props = {
  tokenEndpoint: string;
  refreshEndpoint: string;
  refreshLeeway: number;
  children: JSX.Element | JSX.Element[];
};

type State = {
  refreshTimer: NodeJS.Timeout | undefined;
};
class AuthProvider extends React.Component<Props, State> {
  // Returns authentication state, including current token, user Id and bool state
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshTimer: undefined,
    };
    this.maybeRefresh = this.maybeRefresh.bind(this);
  }

  componentDidMount(): void {
    this.maybeRefresh();
  }

  // This method is responsible for token refresh
  // It is a performance-critical part because this method will be called every second
  async maybeRefresh() {
    if (this.state.refreshTimer) {
      clearTimeout(this.state.refreshTimer);
    }
    try {
      const accessTokExpiryTime = parseInt(getRefreshTokenExpiryTime() ?? "0");
      if (isNaN(accessTokExpiryTime)) {
        return;
      }
      // Note that in case of JWT, expiration date is stored in token
      // itself, so I do not need to make network requests to check expiration
      // Otherwise you might want to store expiration date in _authStatus
      // and localStorage, to not spam your API with unneeded requests
      // every second
      if (accessTokExpiryTime - Date.now() > this.props.refreshLeeway * 1000) {
        // Access token is not due
        return;
      }
      if (accessTokExpiryTime <= Date.now()) {
        // Both access token and refresh token (in my case they are the same) are expired
        setJWT(null);
        setRefreshTokenExpiryTime(null);
        throw new Error("Token is expired");
      }
      // Access token is going to expire soon and we have valid refresh token
      // Make a request to get new access token

      const response = await fetch(this.props.refreshEndpoint, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });
      const body = await response.json();
      if (response.status === 401) {
        // 401 means that refresh token was revoked or user blocked or something else like that
        // In such cases we need to remove stored tokens
        setJWT(null);
        throw body;
      } else if (response.status === 200) {
        // Save new access token in memory and persist
        setJWT(body.token);
        setRefreshTokenExpiryTime(body.expires);
      } else {
        // If it's not 401, might be some network problem. No need to do anything with tokens, let's try again later
        throw body;
      }
    } catch (e) {
      console.log("Something is wrong when trying to refresh token", e);
    } finally {
      // Retry in 1 second
      // Fun fact - code in finally section executes even if try section has return statement
      setTimeout(this.maybeRefresh.bind(this), 1000);
    }
  }

  render() {
    return this.props.children;
  }
}
export default AuthProvider;
