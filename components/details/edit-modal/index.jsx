"use client";

import { useRef } from "react";
import "../details-page.css";
import InvoiceAddPage from "@/components/invoice-form/new-invoices";

export default function DetailEditModal({ data, dataAll }) {
  console.log("data :>> ", data);
  const confirmDeleteModal = useRef();

  const openDialog = () => {
    if (confirmDeleteModal.current) {
      confirmDeleteModal.current.showModal();
    }
  };

  const closeDialog = () => {
    if (confirmDeleteModal.current) {
      confirmDeleteModal.current.close();
    }
  };

  return (
    <>
      <button onClick={() => openDialog()}>Düzenle</button>
      <dialog className="confirm" ref={confirmDeleteModal}>
        <h2>{data?.invoiceName} Faturasını Düzenle</h2>
        <InvoiceAddPage
          data={dataAll}
          page="edit"
          invoinceData={data}
          closeEditDialog={closeDialog}
        />
      </dialog>
    </>
  );
}
