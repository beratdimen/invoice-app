import BillForm from "@/components/bill-form";
import BillTo from "@/components/bill-to";
import FormButtons from "@/components/form-buttons";
import ItemList from "@/components/item-list/page";

export default function InvoiceAddPage() {
  return (
    <form>
      <BillForm />
      <BillTo />
      <ItemList />
      <FormButtons />
    </form>
  );
}
