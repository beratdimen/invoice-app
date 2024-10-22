import FormValidation from "@/actions/form";
import BillForm from "@/components/invoice-form/bill-form";
import BillTo from "@/components/invoice-form/bill-to";
import FormButtons from "@/components/invoice-form/form-buttons";
import { useFormState } from "react-dom";
import "./style.css";
import ItemList from "../item-list";

export default function InvoiceAddPage() {
  const [state, action] = useFormState(FormValidation, {
    message: null,
    error: null,
  });

  return (
    <form action={action}>
      <h1>Yeni Fatura</h1>
      <BillForm error={state.error} />
      <BillTo error={state.error} />
      <ItemList error={state.error} />
      <FormButtons />
    </form>
  );
}
