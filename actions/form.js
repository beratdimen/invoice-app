"use server";
export default async function FormValidation(prevState, formData) {
  const fromStreet = formData.get("fromStreet");
  const fromCity = formData.get("fromCity");
  const fromPostCode = formData.get("fromPostCode");
  const fromCountry = formData.get("fromCountry");
  const userName = formData.get("userName");
  const userEmail = formData.get("userEmail");
  const userAddress = formData.get("userAddress");
  const addressContent = formData.get("addressContent");
  const postCode = formData.get("postCode");
  const country = formData.get("country");
  const invoiceDate = formData.get("invoiceDate");
  const paymentDate = formData.get("paymentDate");
  const projectDescription = formData.get("projectDescription");
  const city = formData.get("city");

  const errors = {};

  if (!fromStreet) errors.fromStreet = "Sokak alanı boş olamaz.";
  if (!fromCity) errors.fromCity = "Şehir alanı boş olamaz.";
  if (!fromPostCode) errors.fromPostCode = "Posta kodu alanı boş olamaz.";
  if (!fromCountry) errors.fromCountry = "Ülke alanı boş olamaz.";
  if (!userName) errors.userName = "Ülke alanı boş olamaz.";
  if (!userEmail) errors.userEmail = "Ülke alanı boş olamaz.";
  if (!userAddress) errors.userAddress = "Ülke alanı boş olamaz.";
  if (!addressContent) errors.addressContent = "Ülke alanı boş olamaz.";
  if (!postCode) errors.postCode = "Ülke alanı boş olamaz.";
  if (!country) errors.country = "Ülke alanı boş olamaz.";
  if (!invoiceDate) errors.invoiceDate = "Ülke alanı boş olamaz.";
  if (!paymentDate) errors.paymentDate = "Ülke alanı boş olamaz.";
  if (!projectDescription) errors.projectDescription = "Ülke alanı boş olamaz.";
  if (!city) errors.city = "Ülke alanı boş olamaz.";

  if (Object.keys(errors).length > 0) {
    return { error: errors };
  }

  return { message: "Başarılı!" };
}
