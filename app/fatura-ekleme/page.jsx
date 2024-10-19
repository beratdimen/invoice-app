import BillForm from "@/components/bill-form";
import BillTo from "@/components/bill-to";
import ItemList from "@/components/item-list/page";

export default function InvoiceAddPage() {
  return (
    <>
      <form>
        <BillForm />
        <BillTo />
        <ItemList />
      </form>
    </>
  );
}
