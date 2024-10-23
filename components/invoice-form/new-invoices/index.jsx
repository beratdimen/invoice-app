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

export default function InvoiceAddPage({
  data,
  closeDialog,
  page = "create",
  invoinceData = null,
  closeEditDialog,
}) {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [user, setUser] = useState({});

  const [state, action] = useFormState(
    (prevState, formData) =>
      FormValidation(prevState, formData, page, invoinceData?.id),
    {
      message: null,
      error: null,
    }
  );

  useEffect(() => {
    if (state?.message === "Başarılı") {
      toast.success(
        page === "create" ? "Başarıyla Eklendi" : "Başarıyla Güncellendi"
      );
      closeEditDialog();
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
      {page == "create" && (
        <>
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
        </>
      )}
      <BillForm error={state?.error} user={user} invoinceData={invoinceData} />
      <BillTo error={state?.error} data={data} invoinceData={invoinceData} />
      <ItemList error={state?.error} invoinceData={invoinceData} />
      {page === "create" && <FormButtons />}
      {page === "edit" && (
        <div className="confirmButtons">
          <button onClick={closeEditDialog}>Vazgeç</button>
          <button>Güncelle</button>
        </div>
      )}
    </form>
  );
}
