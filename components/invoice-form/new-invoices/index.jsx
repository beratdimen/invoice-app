import FormValidation from "@/actions/form";
import BillForm from "@/components/invoice-form/bill-form";
import BillTo from "@/components/invoice-form/bill-to";
import FormButtons from "@/components/invoice-form/form-buttons";
import { useFormState } from "react-dom";
import "./style.css";
import ItemList from "../item-list";
import { toast } from "sonner";
import { useEffect } from "react";

export default function InvoiceAddPage({ data, closeDialog }) {
  const [state, action] = useFormState(FormValidation, {
    message: null,
    error: null,
  });

  useEffect(() => {
    if (state?.message === "Başarılı") {
      toast.success("BAŞARIYLA EKLENDİ");
      closeDialog();
    }
  }, [state?.message]);

  return (
    <form action={action}>
      <h1>Yeni Fatura</h1>
      <BillForm error={state?.error} />
      <BillTo error={state?.error} data={data} />
      <ItemList error={state?.error} />
      <FormButtons />
    </form>
  );
}
