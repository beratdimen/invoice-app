"use client";
import { useState } from "react";
import InvoiceAddPage from "@/components/fatura-ekleme";
import InvoiceCard from "../invoice-card";
import "./style.css";
import Header from "../header/page";
import { AddIcon, GoBack } from "@/helpers/icons";

export default function AddInvoice() {
  const [open, setOpen] = useState(false);

  return (
    <div className="addInvoiceContainer">
      {open ? (
        <div
          className="commentsRightSideBar"
          style={{ width: open ? "100%" : "0%", padding: open ? " 20px" : "0" }}
        >
          <button onClick={() => setOpen(!open)}>
            <GoBack /> Go Back
          </button>
          <InvoiceAddPage />
        </div>
      ) : (
        <div className="invoiceOverview">
          <Header />
          <div className="actions">
            <h2>
              Invoices <span>7 invoices</span>
            </h2>
            <button onClick={() => setOpen(!open)}>
              <AddIcon /> Yeni
            </button>
          </div>
          <InvoiceCard />
        </div>
      )}
    </div>
  );
}
