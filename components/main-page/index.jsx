"use client";

import { useRef, useState } from "react";
import InvoiceAddPage from "@/components/invoice-form/new-invoices";
import { AddIcon, DownIcon, GoBack } from "@/helpers/icons";
import "./main-page.css";

export default function MainPage({ data }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const openDialog = () => {
    setOpen(true);

    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeDialog = () => {
    setOpen(false);

    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  console.log("datamgeldi :>> ", data);

  return (
    <>
      <div className="main-page">
        <div className="add-invoices-header">
          <h2>
            Faturalar <span>{data?.length} Fatura</span>
          </h2>

          <div className="filter">
            <p>
              Filtre <DownIcon />
            </p>

            <div className="filter-options">
              <p>
                <input type="checkbox" /> Draft
              </p>
              <p>
                <input type="checkbox" /> Panding
              </p>
              <p>
                <input type="checkbox" /> Paid
              </p>
            </div>
          </div>

          <button onClick={() => openDialog()}>
            <AddIcon /> Yeni
          </button>
        </div>
      </div>

      <dialog
        className="dialog-form"
        ref={modalRef}
        open={open}
        style={{ width: open ? "100%" : "0%" }}
      >
        <button className="back-button" onClick={() => closeDialog()}>
          <GoBack /> Geri Dön
        </button>

        <InvoiceAddPage data={data} closeDialog={closeDialog} />
      </dialog>
    </>
  );
}
