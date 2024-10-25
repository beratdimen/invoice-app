"use client";

import Link from "next/link";
import "./invoices-list.css";
import { formatDate } from "@/utils/format-date";
import { useEffect, useState } from "react";

const itemPerPage = 4;

export default function InvoicesList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalItems, setTotalItems] = useState(data.length);

  useEffect(() => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;

    setPaginatedData(data.slice(start, end));
  }, [currentPage, data]);

  const totalPages = Math.ceil(totalItems / itemPerPage);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className={`invoices-list`}>
      <div className="invoices">
        {paginatedData.map((x) => (
          <Link key={x.id} href={`/detail/${x.id}`} className={`invoice-card`}>
            <div className="card-header">
              <h2>
                <span>#</span>
                {x.invoiceName}
              </h2>

              <p>{x.client.name}</p>
            </div>

            <div className="card-content">
              <div className="date-price">
                <p>{formatDate(x.paymentDue)}</p>
                {x.items.map((item) => (
                  <h3 key={item.id}>{item.total} $</h3>
                ))}
              </div>

              <div className="situation">
                <p
                  className={
                    x.paymentStatus == 2
                      ? "pending"
                      : x.paymentStatus == 3
                      ? "paid"
                      : "draft"
                  }
                >
                  {x.paymentStatus == 2
                    ? " ● Pending"
                    : x.paymentStatus == 3
                    ? "● Paid"
                    : "● Draft"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* burada hata aliyodum gpt cozdu pek anlamadim */}
      {paginatedData.length > 0 && (
        <div className="pagination">
          {[...Array(totalPages)].map((x, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <div className="empty-container">
        <img src="../img/emptyImage.png" alt="emptyImage" />

        <div className="empty-texts">
          <h2>Burada hiçbir şey yok</h2>
          <p>Yeni düğmesini tıklayarak bir fatura oluşturun ve başlayın</p>
        </div>
      </div>
    </div>
  );
}
