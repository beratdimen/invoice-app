import BillForm from "@/components/bill-form";
import BillTo from "@/components/bill-to";

export default function InvoiceAddPage() {
  return (
    <>
      <form>
        <BillForm />
        <BillTo />
      </form>
    </>
  );
}
