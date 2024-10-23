"use server";

import { getInvoices, postClients, postInvoinces } from "@/utils/service";

export default async function FormValidation(prevState, formData) {
  const formObj = Object.fromEntries(formData);
  console.log(formObj);

  const errors = {
    fromStreet: !formObj.fromStreet && "Sokak alanı boş olamaz.",
    fromCity: !formObj.fromCity && "Şehir alanı boş olamaz.",
    fromPostCode: !formObj.fromPostCode && "Posta kodu alanı boş olamaz.",
    fromCountry: !formObj.fromCountry && "Ülke alanı boş olamaz.",
    userName: !formObj.userName && "İsim alanı boş olamaz.",
    userEmail: !formObj.userEmail && "E-Posta alanı boş olamaz.",
    userAddress: !formObj.userAddress && "Adres alanı boş olamaz.",
    postCode: !formObj.postCode && "Posta Kodu alanı boş olamaz.",
    country: !formObj.country && "Ülke alanı boş olamaz.",
    invoiceDate: !formObj.invoiceDate && "Tarih alanı boş olamaz.",
    paymentDate: !formObj.paymentDate && "Ödeme Tarihi alanı boş olamaz.",
    projectDescription:
      !formObj.projectDescription && "Açıklama alanı boş olamaz.",
    city: !formObj.city && "Şehir alanı boş olamaz.",
    itemName: !formObj.itemName && "Ürün adı alanı boş olamaz.",
    qty: !formObj.qty && "Miktar alanı boş olamaz.",
    price: !formObj.price && "Fiyat alanı boş olamaz.",
  };

  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, v]) => v)
  );

  console.log("errors :>> ", filteredErrors);
  debugger;

  if (Object.keys(filteredErrors).length > 0) {
    return { error: filteredErrors };
  }

  const clientData = {
    name: formObj.userName,
    email: formObj.userEmail,
    address: formObj.userAddress,
    city: formObj.city,
    postCode: formObj.postCode,
    country: formObj.country,
  };

  console.log("clientData :>> ", clientData);

  const responseClient = await postClients(JSON.stringify(clientData));
  debugger;
  console.log("responseClient :>> ", responseClient);

  const invoiceData = {
    invoiceName: formObj.fromStreet,
    description: formObj.projectDescription,
    createdTime: formObj.invoiceDate,
    items: [
      {
        name: formObj.itemName,
        quantity: formObj.qty,
        price: formObj.price,
        total: formObj.qty * formObj.price,
      },
    ],
    paymentStatus: 1,
    clientId: responseClient?.id,
    paymentTerm: Number(formObj.paymentDate),
  };

  console.log("invoiceData :>> ", JSON.stringify(invoiceData));
  const responseInvoince = await postInvoinces(JSON.stringify(invoiceData));
  console.log("responseInvoince :>> ", JSON.stringify(responseInvoince));

  if (!responseInvoince) {
    const errorMessage = await responseInvoince.text();
    throw new Error(`Error: ${responseInvoince.status} - ${errorMessage}`);
  }

  return { message: "Başarılı", reset: true };
}
