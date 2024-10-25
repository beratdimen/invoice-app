// postService.js
"use server";
import { advancedFetch } from "./fetchGet";

export const getInvoices = async () => {
  const response = await advancedFetch("Invoices");
  return response;
};

export const addInvoices = async () => {
  const response = await advancedFetch(`api/Invoice/SaveInvoice`, "POST", {
    title: "Hello",
    userId: 1,
  });
  return response;
};

export const getInvoicesDetail = async (id) => {
  const response = await advancedFetch(`InvoiceDetail/${id}`, "POST");
  return response;
};

export const deleteInvoicesDetail = async (id) => {
  const response = await advancedFetch(
    `api/Invoice/DeleteInvoice/${id}`,
    "DELETE"
  );
  return response;
};

export const postInvoinces = async (formData) => {
  // console.log("formData :>> ", formData);

  const response = await fetch('https://invoiceapp.bariscakdi.com.tr/SaveClient', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
      "Cache-Control": "no-cache",
    },
    cache: "no-store",
    body: {
      name: formData.userName,
      email: formData.userEmail,
      address: formData.userAddress,
      city: formData.city,
      postCode: Number(formData.postCode),
      country: formData.country
    }
  }
  )

 ;

  console.log(response);
  const response2 = await advancedFetch(
    `api/Invoice/SaveInvoice`,
    "POST",
    formData
  );
  // console.log("response :>> ", response);
  // console.log("eklenmis olabilirim :>> ");
  return response;
};

export const updateInvoinces = async (formData) => {
  // console.log("formData :>> ", formData);
  const response = await advancedFetch(
    `api/Invoice/SaveInvoice`,
    "POST",
    formData
  );
  // console.log("response :>> ", response);
  // console.log("eklenmis olabilirim :>> ");
  return response;
};

export const postClients = async (formData) => {
  debugger;
  const response = await advancedFetch(`SaveClient`, "POST", formData);
  // console.log(response, "deneme client fetch");
  return response;
};

export const getClients = async () => {
  debugger;
  const response = await advancedFetch(`api/Client/GetClients`);
  // console.log(response, "deneme getclient fetch");
  return response;
};
