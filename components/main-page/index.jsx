"use client";

import { useEffect, useRef, useState } from "react";
import InvoiceAddPage from "@/components/invoice-form/new-invoices";
import { AddIcon, DownIcon, GoBack } from "@/helpers/icons";
import "./main-page.css";
import InvoicesList from "../invoices-list";

export default function MainPage({ data }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
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

  useEffect(() => {
    if (value.length > 0) {
      const result = data.filter((x) => value.includes(x.paymentStatus));
      setFilteredData(result);
      console.log("Filtered Data:>> ", result);
    } else {
      setFilteredData(data);
    }
  }, [value]);

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
                <input
                  type="checkbox"
                  value={1}
                  onChange={(e) => {
                    value.includes(1)
                      ? setValue(value.filter((x) => x !== 1))
                      : setValue([...value, 1]);
                  }}
                />
                Draft
              </p>
              <p>
                <input
                  type="checkbox"
                  value={2}
                  onChange={(e) => {
                    value.includes(2)
                      ? setValue(value.filter((x) => x !== 2))
                      : setValue([...value, 2]);
                  }}
                />
                Pending
              </p>
              <p>
                <input
                  type="checkbox"
                  value={3}
                  onChange={(e) => {
                    value.includes(3)
                      ? setValue(value.filter((x) => x !== 3))
                      : setValue([...value, 3]);
                  }}
                />
                Paid
              </p>
            </div>
          </div>

          <button onClick={() => openDialog()}>
            <AddIcon /> Yeni
          </button>
        </div>
      </div>

      <InvoicesList data={filteredData} />

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
