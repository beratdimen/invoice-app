"use client";
import { GoBack } from "@/helpers/icons";
import "./details-page.css";
import Link from "next/link";
import { toast } from "sonner";
import DetailDeleteModal from "./delete-modal";
import DetailEditModal from "./edit-modal";
import { useState } from "react";

export default function Details({ data, dataAll }) {
  const [paymentStatus, setPaymentStatus] = useState(data.paymentStatus);

  const handlePaymentCompleted = () => {
    setPaymentStatus(3);
    toast.success("Payment marked as completed!");
  };
  return (
    <div className="detailsContainer">
      <div className="return">
        <Link href={"/"}>
          <GoBack /> Geri Dön
        </Link>
      </div>

      <div className="contentContainer">
        <div className="desktopButtons">
          <div className="status">
            <p>Status</p>
            <div className="situation">
              <p
                className={
                  paymentStatus == 2
                    ? "pending"
                    : paymentStatus == 3
                    ? "paid"
                    : "draft"
                }
              >
                {paymentStatus == 2
                  ? " ● Pending"
                  : paymentStatus == 3
                  ? "● Paid"
                  : "● Draft"}
              </p>
            </div>
          </div>
          <div className="detailsButtons desktop">
            <DetailEditModal data={data} dataAll={dataAll} />
            <DetailDeleteModal data={data} />
            <button onClick={() => handlePaymentCompleted()}>
              Ödeme Yapıldı
            </button>
          </div>
        </div>
        <div className="generalDetail">
          <div className="idAddress">
            <div className="billIdnCat">
              <h3>
                <strong>{data?.invoiceName}</strong>
              </h3>
              <p>{data?.description}placeholder</p>
            </div>
            <div className="companyAddress">
              <p>placeholder</p>
              <p>placeholder</p>
              <p>placeholder</p>
              <p>placeholder</p>
            </div>
          </div>
          <div className="desktopAddressMail">
            <div className="desktopAdress">
              <div className="dateDue">
                <div className="billDate">
                  <p>Fatura Tarihi</p>
                  <strong>placeholder</strong>
                </div>
                <div className="billDate">
                  <p>Ödeme Tarihi</p>
                  <strong>placeholder</strong>
                </div>
              </div>
              <div className="customerInfo">
                <div className="customer">
                  <p>Fatura Sahibi</p>
                  <strong>placeholder</strong>
                </div>
                <div className="companyAddress">
                  <p>{data?.client?.address}</p>
                  <p>{data?.client?.city}</p>
                  <p>{data?.client?.postCode}</p>
                  <p>{data?.client?.country}</p>
                </div>
              </div>
            </div>
            <div className="customerEmail">
              <p>Gönderilen</p>
              <strong>{data?.client?.email}</strong>
            </div>
          </div>
          <div className="cart">
            <div className="cartSections">
              <p>Ürün Adı</p>
              <p>Adet</p>
              <p>Fiyat</p>
              <p>Toplam</p>
            </div>
            {data?.items.map((item, index) => (
              <div className="cartItemDesktop" key={index}>
                <strong>{item?.name}</strong>
                <p>{item?.quantity}</p>
                <p>£{item?.price}</p>
                <strong>£{item?.quantity * item?.price}</strong>
              </div>
            ))}
            {data?.items.map((item, index) => (
              <div className="cartItem" key={index}>
                <div className="item">
                  <strong>{item?.name}</strong>
                  <p>
                    {item?.quantity} x £ {item?.price}
                  </p>
                </div>
                <strong>£ {item?.quantity * item?.price}</strong>
              </div>
            ))}
            <div className="grandTotal">
              <p>Ödenecek Tutar</p>
              <h2>
                £
                {data?.items?.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="detailsButtons mobile">
        <button>Düzenle</button>
        <DetailDeleteModal data={data} />
        <button onClick={() => handlePaymentCompleted()}>Ödeme Yapıldı</button>
      </div>
    </div>
  );
}
