import { redirect } from "next/navigation";

export const advancedFetch = async (url, method = "GET", data = null) => {
  // console.log("data :>> ", data);
  // console.log("method :>> ", method);
  // console.log(
  //   "`https://invoiceapp.bariscakdi.com.tr/` + url :>> ",
  //   `https://invoiceapp.bariscakdi.com.tr/` + url
  // );
  const response = await fetch(`https://invoiceapp.bariscakdi.com.tr/` + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
      "Cache-Control": "no-cache",
    },
    cache: "no-store",
    body: data ? data : null,
  });

  // console.log("response :>> ", response);

  if (method === "DELETE") return response;
  if (url === "SaveClient") return response;
  if (!response?.ok) redirect("/");
  const responseData = await response.json();

  // console.log("responseData :>> ", responseData);
  return responseData;
};
