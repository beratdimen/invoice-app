import "./bill-form.css";

export default function BillForm({ error }) {
  return (
    <div className="billFrom">
      <h3>Fatura Gönderen</h3>
      <label htmlFor="fromStreet">Sokak</label>

      <input
        type="text"
        id="fromStreet"
        name="fromStreet"
        placeholder="Sokak"
        defaultValue={"mehmet sokak"}
      />
      {error?.fromStreet && <p className="error">{error.fromStreet}</p>}

      <div className="city">
        <div>
          <label htmlFor="fromCity">Şehir</label>
          <input
            type="text"
            id="fromCity"
            name="fromCity"
            placeholder="Şehir"
          />
          {error?.fromCity && <p className="error">{error.fromCity}</p>}
        </div>
        <div>
          <label htmlFor="fromPostCode">Posta Kodu</label>
          <input
            type="text"
            id="fromPostCode"
            name="fromPostCode"
            placeholder="Posta Kodu"
          />
          {error?.fromPostCode && <p className="error">{error.fromPostCode}</p>}
        </div>
      </div>

      <label htmlFor="fromCountry">Ülke</label>
      <input
        type="text"
        id="fromCountry"
        name="fromCountry"
        placeholder="Ülke"
      />
      {error?.fromCountry && <p className="error">{error.fromCountry}</p>}
    </div>
  );
}
