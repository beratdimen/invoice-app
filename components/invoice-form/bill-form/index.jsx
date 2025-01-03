import { useEffect, useState } from "react";
import "./bill-form.css";

export default function BillForm({ error, user, invoinceData }) {
  return (
    <div className="bill-from">
      <h3>Fatura Gönderen</h3>

      <div className="bill-form-item">
        <label htmlFor="fromStreet">Sokak</label>
        <input
          defaultValue={
            invoinceData ? invoinceData?.invoiceName : user?.invoinceName
          }
          type="text"
          id="fromStreet"
          name="fromStreet"
          placeholder="Sokak"
        />

        {error?.fromStreet && <p className="error">{error.fromStreet}</p>}
      </div>

      <div className="city-and-post-code">
        <div className="bill-form-item">
          <label htmlFor="fromCity">Şehir</label>
          <input
            defaultValue={
              invoinceData ? invoinceData?.client?.city : user?.city
            }
            type="text"
            id="fromCity"
            name="fromCity"
            placeholder="Şehir"
          />
          {error?.fromCity && <p className="error">{error.fromCity}</p>}
        </div>

        <div className="bill-form-item">
          <label htmlFor="fromPostCode">Posta Kodu</label>
          <input
            defaultValue={
              invoinceData ? invoinceData?.client?.postCode : user?.postCode
            }
            type="text"
            id="fromPostCode"
            name="fromPostCode"
            placeholder="Posta Kodu"
          />
          {error?.fromPostCode && <p className="error">{error.fromPostCode}</p>}
        </div>
      </div>

      <div className="bill-form-item">
        <label htmlFor="fromCountry">Ülke</label>
        <input
          defaultValue={
            invoinceData ? invoinceData?.client?.country : user?.country
          }
          type="text"
          id="fromCountry"
          name="fromCountry"
          placeholder="Ülke"
        />
        {error?.fromCountry && <p className="error">{error.fromCountry}</p>}
      </div>
    </div>
  );
}
