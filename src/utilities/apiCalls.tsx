export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

// https://github.com/vercel/swr/discussions/939
// https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257