import { IsValidJSONString } from "../helpers";

export function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text;

    if (!response.ok) {
      // trying to get as much information about the error as I can get
      const error =
        response.statusText ||
        (data.message + data.error && data.error + ": " + data.message) ||
        data.message ||
        data.error ||
        data;
      return Promise.reject(error);
    }
    return data;
  });
}
