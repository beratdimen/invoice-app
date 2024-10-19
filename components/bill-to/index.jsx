import "./style.css";
export default function BillTo() {
  return (
    <div className="billTo">
      <h3>Fatura Sahibi</h3>
      <label htmlFor="userName">
        Müşteri Adı
        <input type="text" name="userName" placeholder="Ad" id="userName" />
      </label>

      <label htmlFor="userEmail">
        Müşteri E-Posta
        <input
          type="text"
          placeholder="E-Posta"
          name="userEmail"
          id="userEmail"
        />
      </label>

      <label htmlFor="userAddress">
        Müşteri Adresi
        <input
          type="text"
          placeholder="Adres"
          name="userAddress"
          id="userAddress"
        />
      </label>

      <div className="cities">
        <label htmlFor="city">
          Şehir
          <input type="text" placeholder="Şehir" name="city" id="city" />
        </label>

        <label htmlFor="postCode">
          Posta Kodu
          <input
            type="text"
            placeholder="Posta Kodu"
            name="postCode"
            id="postCode"
          />
        </label>
      </div>

      <label htmlFor="country">
        Ülke
        <input type="text" placeholder="Ülke" name="country" id="country" />
      </label>

      <label htmlFor="invoiceDate">
        Fatura Tarihi
        <input
          type="date"
          placeholder="Fatura Tarihi"
          name="invoiceDate"
          id="invoiceDate"
        />
      </label>

      <label htmlFor="paymentDate">
        Ödeme Koşulları
        <select name="paymentDate" id="">
          <option value="">Önümüzdeki 30 Gün</option>
          <option value="">Önümüzdeki 14 Gün</option>
          <option value="">Önümüzdeki 7Gün</option>
          <option value="">Önümüzdeki 1 Gün</option>
        </select>
      </label>

      <label htmlFor="projectDescription">
        Proje Açıklaması
        <input
          type="text"
          placeholder="Proje Açıklaması"
          name="projectDescription"
          id="projectDescription"
        />
      </label>
    </div>
  );
}
