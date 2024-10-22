"use client";

import { GoBack } from "@/helpers/icons";
import "./details-page.css";
import Link from "next/link";
import { useRef } from "react";
import Customer from "./serverSide";

export default function Details() {
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
    <div className="detailsContainer">
      <div className="return">
        <Link href={"/"}>
          <GoBack /> Geri Dön
        </Link>
      </div>
      
      <div className="desktopButtons">
        <div className="status">
          <p>Status</p>
          <span>Pending</span>
        </div>
        <div className="detailsButtons desktop">
          <button>Düzenle</button>
          <button onClick={() => openDialog()}>Sil</button>
          <button>Ödeme Yapıldı</button>
        </div>
      </div>

      <div className="desktopAdress">
        <div className="billIdnCat">
          <h3>
            #<strong>XM9141</strong>
          </h3>
          <p>Grafik Dizayn</p>
        </div>
        <div className="companyAddress">
          <p>19 Uninon Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>

      <div className="desktopAddressMail">
        {/* <Customer /> */}

        <div className="customerEmail">
          <p>Gönderilen</p>
          <strong>alexgrim@mail.com</strong>
        </div>
      </div>

      <div className="cart">
        <div className="cartSections">
          <p>Ürün Adı</p>
          <p>Adet</p>
          <p>Fiyat</p>
          <p>Toplam</p>
        </div>
        <div className="cartItemDesktop">
          <input
            type="text"
            name="itemName"
            readOnly
            defaultValue={"Banner Design"}
          />
          <input type="text" name="quantity" readOnly defaultValue={1} />
          <input type="text" name="price" readOnly defaultValue={"£ 156.00"} />
          <input type="text" name="total" readOnly defaultValue={"£ 556.00"} />
        </div>
        <div className="cartItem">
          <div className="item">
            <strong>Banner Design</strong>
            <p>1 x £ 156.00</p>
          </div>
          <strong>£ 156.00</strong>
        </div>

        <div className="grandTotal">
          <p>Ödenecek Tutar</p>
          <h2>£ 556.00</h2>
        </div>
      </div>

      <div className="detailsButtons mobile">
        <button>Düzenle</button>
        <button onClick={() => openDialog()}>Sil</button>
        <button>Ödeme Yapıldı</button>
      </div>

      <dialog className="confirm" ref={confirmDeleteModal}>
        <h2>Silmeyi Onayla</h2>
        <p>
          XM9141 numaralı faturayı silmek istediğinizden emin misiniz? Bu eylem
          geri alınamaz.
        </p>
        <div className="confirmButtons">
          <button onClick={() => closeDialog()}>Vazgeç</button>
          <button>Sil</button>
        </div>
      </dialog>
    </div>
  );
}
