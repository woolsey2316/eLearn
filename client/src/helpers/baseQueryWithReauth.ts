import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { API_URL } from "../services";
import { setJWT, setRefreshTokenExpiryTime, removeJWTToken } from "./session-storage";
import { history } from "./history";

export function createBaseQueryWithReauth(baseUrl: string): BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> {
  const baseQuery = fetchBaseQuery({ baseUrl });

  return async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      // Attempt token refresh
      const refreshResult = await fetchBaseQuery({ baseUrl: API_URL })(
        { url: "auth/refresh", method: "POST", credentials: "include" },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const data = refreshResult.data as { token: string; expires: number };
        setJWT(data.token);
        setRefreshTokenExpiryTime(data.expires);
        // Retry the original request with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Refresh failed — clear session and redirect to login
        removeJWTToken();
        history.push("/login");
      }
    }

    return result;
  };
}
