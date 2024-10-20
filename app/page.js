import InvoicePAge from "./invoice/page";

export default async function Home() {
  const response = await fetch(
    " https://invoiceapp.bariscakdi.com.tr/api/User/GetUsers"
  );
  const data = await response.json();
  console.log(data);
  return (
    <>
      <InvoicePAge />
    </>
  );
}
