import "./bill-to.css";

export default function BillTo({ error, data, user, invoinceData }) {
  return (
    <div className="bill-to-form">
      <h3>Fatura Sahibi</h3>

      <div className="bill-to-form-item">
        <label htmlFor="userName">Müşteri Adı</label>
        <input
          type="text"
          name="userName"
          placeholder="Ad"
          id="userName"
          list="userNames"
          defaultValue={invoinceData ? invoinceData?.client?.name : user?.name}
        />
        {error?.userName && <p className="error">{error.userName}</p>}
        <datalist id="userNames">
          {data.map((x, index) => (
            <option key={index} value={x.client.name} />
          ))}
        </datalist>
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="userEmail">Müşteri E-Posta</label>
        <input
          type="text"
          placeholder="E-Posta"
          name="userEmail"
          id="userEmail"
          defaultValue={
            invoinceData ? invoinceData?.client?.email : user?.email
          }
        />
        {error?.userEmail && <p className="error">{error.userEmail}</p>}
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="userAddress">Müşteri Adresi</label>
        <input
          type="text"
          placeholder="Adres"
          name="userAddress"
          id="userAddress"
          defaultValue={
            invoinceData ? invoinceData?.client?.address : user?.address
          }
        />
        {error?.userAddress && <p className="error">{error.userAddress}</p>}
      </div>

      <div className="city-and-post-code">
        <div className="bill-to-form-item">
          <label htmlFor="city">Şehir</label>
          <input
            type="text"
            placeholder="Şehir"
            name="city"
            id="city"
            defaultValue={
              invoinceData ? invoinceData?.client?.city : user?.city
            }
          />
          {error?.city && <p className="error">{error.city}</p>}
        </div>

        <div className="bill-to-form-item">
          <label htmlFor="postCode">Posta Kodu</label>
          <input
            type="text"
            placeholder="Posta Kodu"
            name="postCode"
            id="postCode"
            defaultValue={
              invoinceData ? invoinceData?.client?.postCode : user?.postCode
            }
          />
          {error?.postCode && <p className="error">{error.postCode}</p>}
        </div>
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="country">Ülke</label>
        <input
          type="text"
          placeholder="Ülke"
          name="country"
          id="country"
          defaultValue={
            invoinceData ? invoinceData?.client?.country : user?.country
          }
        />
        {error?.country && <p className="error">{error.country}</p>}
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="invoiceDate">Fatura Tarihi</label>
        <input
          type="date"
          placeholder="Fatura Tarihi"
          name="invoiceDate"
          id="invoiceDate"
          defaultValue={invoinceData ? invoinceData?.paymentDue : null}
        />
        {error?.invoiceDate && <p className="error">{error.invoiceDate}</p>}
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="paymentDate">Ödeme Koşulları</label>
        <select name="paymentDate" id="paymentDate">
          <option value={30}>Önümüzdeki 30 Gün</option>
          <option value={14}>Önümüzdeki 14 Gün</option>
          <option value={7}>Önümüzdeki 7 Gün</option>
          <option value={1}>Önümüzdeki 1 Gün</option>
        </select>
        {error?.paymentDate && <p className="error">{error.paymentDate}</p>}
      </div>

      <div className="bill-to-form-item">
        <label htmlFor="projectDescription">Proje Açıklaması</label>
        <input
          type="text"
          placeholder="Proje Açıklaması"
          name="projectDescription"
          id="projectDescription"
          defaultValue={invoinceData ? invoinceData?.description : null}
        />
        {error?.projectDescription && (
          <p className="error">{error.projectDescription}</p>
        )}
      </div>
    </div>
  );
}
