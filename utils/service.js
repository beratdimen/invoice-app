// postService.js
"use server";
import { advancedFetch } from "./fetchGet";

export const getInvoices = async () => {
  const response = await advancedFetch("Invoices?page=1&pageSize=200");
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
  console.log("formData :>> ", formData);

  const response = await fetch(
    "https://invoiceapp.bariscakdi.com.tr/SaveClient",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify({
        id: 0,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        postCode: Number(formData.postCode),
        country: formData.country,
      }),
    }
  );
  
  const response2 = await fetch("https://invoiceapp.bariscakdi.com.tr/api/Client/GetClients");
  const data2 = await response2.json();

  const filtered = data2.find(x=> x.email === formData.email);
  const filteredId = await filtered.id
  console.log(filteredId);
  console.log(formData);
  
  
  const response3 = await fetch("https://invoiceapp.bariscakdi.com.tr/api/Invoice/SaveInvoice",{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
    body: JSON.stringify({
      id: 0,
      invoiceName: "string",
      description: formData.description,
      paymentStatus: formData.paymentStatus,
      paymentTerm: formData.paymentTerm,
      paymentDue: "2024-11-25T19:39:36.591Z",
      clientId: filteredId,
      items: [
        {
          id:0,
          name: formData.items[0].name,
          quantity: formData.items[0].quantity,
          price: formData.items[0].price
      }
    ]
    })
  })
  
  console.log(response3);
  

  // const response2 = await advancedFetch(
  //   `api/Invoice/SaveInvoice`,
  //   "POST",
  //   formData
  // );
  // console.log("response :>> ", response);
  // console.log("eklenmis olabilirim :>> ");
  return response3;
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
