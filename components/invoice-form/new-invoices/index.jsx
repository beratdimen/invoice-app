import FormValidation from "@/actions/form";
import BillForm from "@/components/invoice-form/bill-form";
import BillTo from "@/components/invoice-form/bill-to";
import FormButtons from "@/components/invoice-form/form-buttons";
import { useFormState } from "react-dom";
import "./style.css";
import ItemList from "../item-list";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { getClients } from "@/utils/service";

export default function InvoiceAddPage({ data, closeDialog }) {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [user, setUser] = useState({});

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

  const handleInput = async (e) => {
    const response = await getClients(e.target.value);

    if (Array.isArray(response)) {
      setSearchedUsers(response);
    }
  };

  useEffect(() => {
    const user = searchedUsers.find((x) => x.id == selectedUser);

    console.log("user :>> ", user);

    setUser(user);
  }, [selectedUser]);

  return (
    <form action={action}>
      <h1>Yeni Fatura</h1>
      <select
        name="getClients"
        id=""
        onChange={(e) => setSelectedUser(e.target.value)}
        onBlur={(e) => setSelectedUser(e.target.value)}
        onClick={handleInput}
      >
        {searchedUsers.map((x) => (
          <option value={x?.id}>
            {x.name}- {x.address}
          </option>
        ))}
      </select>
      <BillForm error={state?.error} user={user} />
      <BillTo error={state?.error} data={data} user={user} />
      <ItemList error={state?.error} />
      <FormButtons />
    </form>
  );
}
