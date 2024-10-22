"use client";

import { useRef, useState } from "react";
import InvoiceAddPage from "@/components/fatura-ekleme";
import "./style.css";
import { AddIcon, DownIcon, GoBack } from "@/helpers/icons";

export default function AddInvoices({ data }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  console.log(data);

  const openDialog = () => {
    setOpen(true);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
    console.log("girin bana");
  };
  const closeDialog = () => {
    setOpen(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className="addInvoiceContainer">
      <div className="invoiceOverview">
        <div className="mainPage">
          <div className="actions">
            <h2>
              Invoices <span>7 invoices</span>
            </h2>
            <div className="generalFiltre">
              <p>
                Filtre <DownIcon />
              </p>
              <div className="filtre">
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

          {/* <div className="cardSection">
            <InvoiceCard data={data} />
          </div> */}

          <div className="emptyContainer">
            <img src="../img/emptyImage.png" alt="emptyImage" />

            <div className="emptyTexts">
              <h2>Burada hiçbir şey yok</h2>
              <p>Yeni düğmesini tıklayarak bir fatura oluşturun ve başlayın</p>
            </div>
          </div>
        </div>
      </div>

      <dialog className="dialogForm" ref={modalRef} open={open}>
        <div
          className="commentsRightSideBar"
          style={{
            width: open ? "100%" : "0%",
            transition: "width 1s ease",
          }}
        >
          <button className="backButton" onClick={() => closeDialog()}>
            <GoBack /> Geri Dön
          </button>
          <InvoiceAddPage />
        </div>
      </dialog>
    </div>
  );
}
