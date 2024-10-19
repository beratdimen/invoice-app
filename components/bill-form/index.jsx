import css from './bill-form.css'

export default function BillForm() {
  return (
      <div className="billFrom">
        <h3>Fatura Gönderen</h3>
        <label htmlFor="fromStreet">Sokak</label>
        <input type="text" id='fromStreet' name="fromStreet" />
        <div className="city">
        <div>
          <label htmlFor="fromCity">Şehir</label>
          <input type="text" id='fromCity' name="fromCity" />
        </div>
        <div>
          <label htmlFor="fromPostCode">Posta Kodu</label>
          <input type="text" id='fromPostCode' name='fromPostCode' />
          </div>
        </div>
        <label htmlFor="fromCountry">Ülke</label>
        <input type="text" id='fromCountry' name="fromCountry"/>
      </div>
  )
}
