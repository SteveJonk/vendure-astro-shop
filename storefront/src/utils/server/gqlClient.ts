import type {Query, Headers} from "../../types/query.ts";

const gqlShopURL = import.meta.env.SERVER_SHOPAPI;

export const createQuery = async ({ query, variables }: Query, cookie: string) => {
  const headers: Headers = { "Content-Type": "application/json" };
  if (cookie) headers.Cookie = cookie;
  const response = await fetch(gqlShopURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    credentials: "include",
  });

  const json = await response.json();
  return json.data;
};
