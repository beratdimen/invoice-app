import { GoBack } from "@/helpers/icons";
import "./details-page.css";
import Link from "next/link";
import { toast } from "sonner";
import DetailDeleteModal from "./delete-modal";

export default async function Details({ data }) {
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

          <div className="situation">
            <p
              className={
                data.paymentStatus == 2
                  ? "pending"
                  : data.paymentStatus == 3
                  ? "paid"
                  : "draft"
              }
            >
              {data.paymentStatus == 2
                ? " ● Pending"
                : data.paymentStatus == 3
                ? "● Paid"
                : "● Draft"}
            </p>
          </div>
        </div>
        <div className="detailsButtons desktop">
          <button>Düzenle</button>
          <DetailDeleteModal data={data} />
          <button>Ödeme Yapıldı</button>
        </div>
      </div>

      <div className="desktopAdress">
        <div className="billIdnCat">
          <h3>
            <strong>{data?.invoiceName}</strong>
          </h3>
          <p>{data?.description}</p>
        </div>
        <div className="companyAddress">
          <p>{data?.client?.address}</p>
          <p>{data?.client?.city}</p>
          <p>{data?.client?.postCode}</p>
          <p>{data?.client?.country}</p>
        </div>
      </div>

      <div className="desktopAddressMail">
        {/* <Customer /> */}

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
            <input
              type="text"
              name="itemName"
              readOnly
              defaultValue={item?.name}
            />
            <input
              type="text"
              name="quantity"
              readOnly
              defaultValue={item?.quantity}
            />
            <input
              type="text"
              name="price"
              readOnly
              defaultValue={`£${item?.price}`}
            />
            <input
              type="text"
              name="total"
              readOnly
              defaultValue={`£${item?.quantity * item?.price}`}
            />
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

      <div className="detailsButtons mobile">
        <button>Düzenle</button>
        <DetailDeleteModal data={data} />
        <button>Ödeme Yapıldı</button>
      </div>
    </div>
  );
}
