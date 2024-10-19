import FormValidation from "@/actions/form";
import BillForm from "@/components/bill-form";
import BillTo from "@/components/bill-to";
import FormButtons from "@/components/form-buttons";
import ItemList from "@/components/item-list/page";
import { useFormState } from "react-dom";
import "./style.css";
export default function InvoiceAddPage() {
  const [state, action] = useFormState(FormValidation, {
    message: null,
    error: null,
  });

  return (
    <form action={action}>
      <BillForm error={state.error} />
      <BillTo error={state.error} />
      <ItemList />
      <FormButtons />
    </form>
  );
}
