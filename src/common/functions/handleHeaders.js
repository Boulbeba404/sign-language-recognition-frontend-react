import { store } from "../../redux";

export function handleHeaders(tokenType) {
  let headers = {
    "Content-Type": "application/json",
  };
  if (tokenType !== "noToken") {
    const { accessToken } = getAuthState();
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return headers;
}
function getAuthState() {
  const { accessToken } = store.getState().auth;
  return { accessToken };
}
