"use client";
import { useState } from "react";
import InvoiceAddPage from "@/components/fatura-ekleme";
import InvoiceCard from "../invoice-card";
import "./style.css";
import Header from "../header/page";
import { AddIcon, DownIcon, GoBack } from "@/helpers/icons";

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
          <div className="general">
            <div className="actions">
              <h2>
                Invoices <span>7 invoices</span>
              </h2>
              <div className="btns">
                <a>
                  Filter <DownIcon />
                </a>
                <div className="filter">
                  <p>
                    <input type="checkbox" name="" id="" /> Draft
                  </p>
                  <p>
                    <input type="checkbox" name="" id="" /> Pending
                  </p>
                  <p>
                    <input type="checkbox" name="" id="" /> Paid
                  </p>
                </div>
                <button onClick={() => setOpen(!open)}>
                  <AddIcon /> Yeni
                </button>
              </div>
            </div>
            <InvoiceCard />
          </div>
        </div>
      )}
    </div>
  );
}
