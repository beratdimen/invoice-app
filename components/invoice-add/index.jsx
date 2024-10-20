"use client";

import { useRef, useState } from "react";
import InvoiceAddPage from "@/components/fatura-ekleme";
import InvoiceCard from "../invoice-card";
import "./style.css";
import Header from "../header/page";
import { AddIcon, DownIcon, GoBack } from "@/helpers/icons";

export default function AddInvoice() {
  const [open, setOpen] = useState(true);
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

  return (
    <div className="addInvoiceContainer">
      <Header />

      <>
        <dialog ref={modalRef} open={open}>
          <div
            className="commentsRightSideBar"
            style={{
              width: open ? "100%" : "0%",
              transition: "width 1s ease",
            }}
          >
            <button className="backButton" onClick={() => closeDialog()}>
              <GoBack /> Go Back
            </button>
            <InvoiceAddPage />
          </div>
        </dialog>
      </>

      <div className="invoiceOverview">
        <div className="mainPage">
          <div className="actions">
            <h2>
              Invoices <span>7 invoices</span>
            </h2>

            <button onClick={() => openDialog()}>
              <AddIcon /> Yeni
            </button>
          </div>

          <div className="cardSection">
            <InvoiceCard />
          </div>

          <div className="emptyContainer">
            <img src="../img/emptyImage.png" alt="emptyImage" />

            <div className="emptyTexts">
              <h2>There is nothing here</h2>
              <p>
                Create an invoice by clicking the New button and get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
