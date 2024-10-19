import "./style.css";

export default function BillTo({ error }) {
  return (
    <div className="billTo">
      <h3>Fatura Sahibi</h3>

      <label htmlFor="userName">
        Müşteri Adı
        <input type="text" name="userName" placeholder="Ad" id="userName" />
        {error?.userName && <p className="error">{error.userName}</p>}
      </label>

      <label htmlFor="userEmail">
        Müşteri E-Posta
        <input
          type="text"
          placeholder="E-Posta"
          name="userEmail"
          id="userEmail"
        />
        {error?.userEmail && <p className="error">{error.userEmail}</p>}
      </label>

      <label htmlFor="userAddress">
        Müşteri Adresi
        <input
          type="text"
          placeholder="Adres"
          name="userAddress"
          id="userAddress"
        />
        {error?.userAddress && <p className="error">{error.userAddress}</p>}
      </label>

      <div className="addressContent">
        <div className="citiesContent">
          <label htmlFor="city">
            Şehir
            <input type="text" placeholder="Şehir" name="city" id="city" />
            {error?.city && <p className="error">{error.city}</p>}
          </label>

          <label htmlFor="postCode">
            Posta Kodu
            <input
              type="text"
              placeholder="Posta Kodu"
              name="postCode"
              id="postCode"
            />
            {error?.postCode && <p className="error">{error.postCode}</p>}
          </label>
        </div>
        <label htmlFor="country">
          Ülke
          <input type="text" placeholder="Ülke" name="country" id="country" />
          {error?.country && <p className="error">{error.country}</p>}
        </label>
      </div>

      <div className="invoicePaymentDate">
        <label htmlFor="invoiceDate">
          Fatura Tarihi
          <input
            type="date"
            placeholder="Fatura Tarihi"
            name="invoiceDate"
            id="invoiceDate"
          />
          {error?.invoiceDate && <p className="error">{error.invoiceDate}</p>}
        </label>

        <label htmlFor="paymentDate">
          Ödeme Koşulları
          <select name="paymentDate" id="paymentDate">
            <option value="">Önümüzdeki 30 Gün</option>
            <option value="">Önümüzdeki 14 Gün</option>
            <option value="">Önümüzdeki 7 Gün</option>
            <option value="">Önümüzdeki 1 Gün</option>
          </select>
          {error?.paymentDate && <p className="error">{error.paymentDate}</p>}
        </label>
      </div>

      <label htmlFor="projectDescription">
        Proje Açıklaması
        <input
          type="text"
          placeholder="Proje Açıklaması"
          name="projectDescription"
          id="projectDescription"
        />
        {error?.projectDescription && (
          <p className="error">{error.projectDescription}</p>
        )}
      </label>
    </div>
  );
}
