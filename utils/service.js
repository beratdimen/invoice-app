// postService.js
import { advancedFetch } from "./fetchGet";

export const getInvoices = async () => {
  const response = await advancedFetch(
    "https://invoiceapp.bariscakdi.com.tr/api/Invoice/GetInvoices"
  );
  console.log(response, "deneme fetch");
  return response;
};

export const addInvoices = async () => {
  const response = await advancedFetch(
    `https://invoiceapp.bariscakdi.com.tr/api/Invoice/SaveInvoice`,
    "POST",
    {
      title: "Hello",
      userId: 1,
    }
  );
  return response;
};

export const getInvoicesDetail = async (id) => {
  const response = await advancedFetch(
    ` https://invoiceapp.bariscakdi.com.tr/api/Invoice/GetInvoices/${id}`
  );
  console.log(response, "deneme fetch");
  return response;
};
