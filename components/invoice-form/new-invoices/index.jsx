import FormValidation from "@/actions/form";
import BillForm from "@/components/invoice-form/bill-form";
import BillTo from "@/components/invoice-form/bill-to";
import FormButtons from "@/components/invoice-form/form-buttons";
import { useFormState } from "react-dom";
import "./style.css";
import ItemList from "../item-list";

export default function InvoiceAddPage({ data }) {
  const [state, action] = useFormState(FormValidation, {
    message: null,
    error: null,
  });

  console.log("state :>> ", state);
  return (
    <form action={action}>
      <h1>Yeni Fatura</h1>
      <BillForm error={state.error} />
      <BillTo error={state.error} data={data} />
      <ItemList error={state.error} />
      <FormButtons />
    </form>
  );
}
