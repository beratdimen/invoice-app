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
      {open ? 
        (
          <>
            <Header />
            
            <div className="commentsRightSideBar" style={{ width: open ? "100%" : "0%"}}>
              <button className="backButton" onClick={() => setOpen(!open)}>
                <GoBack /> Go Back
              </button>

              <InvoiceAddPage />
            </div>
          </>
        ) 
        : 
        (
          <div className="invoiceOverview">
            <Header />

            <div className="mainPage">
              <div className="actions">
                <h2>Invoices <span>7 invoices</span></h2>
                
                <button onClick={() => setOpen(!open)}>
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
                  <p>Create an invoice by clicking the New button and get started</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
