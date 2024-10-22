import { redirect } from "next/navigation";

export const advancedFetch = async (url, method = "GET", data = null) => {
  const response = await fetch(`https://invoiceapp.bariscakdi.com.tr/` + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
      "Cache-Control": "no-cache",
    },
    cache: "no-store",
    body: data ? JSON.stringify(data) : null,
  });

  if (method === "DELETE") return response;
  if (!response?.ok) redirect("/");
  const responseData = await response.json();
  return responseData;
};
