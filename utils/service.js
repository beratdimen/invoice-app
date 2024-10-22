// postService.js
import { advancedFetch } from "./fetchGet";

export const getInvoices = async () => {
  const response = await advancedFetch("Invoices");
  console.log(response, "deneme fetch");
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
  console.log(response, "deneme fetch");
  return response;
};

export const deleteInvoicesDetail = async (id) => {
  const response = await advancedFetch(
    `api/Invoice/DeleteInvoice/${id}`,
    "DELETE"
  );
  console.log(response, "deneme fetch");
  return response;
};

export const postInvoinces = async (formData) => {
  const response = await advancedFetch(
    `api/Invoice/SaveInvoice`,
    "POST",
    formData
  );
  console.log(response, "deneme fetch");
  return response;
};
