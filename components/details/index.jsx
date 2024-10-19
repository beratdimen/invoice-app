import './style.css'
export default function Details(){

  return (
    <div className="detailsContainer">
      
      <div>
        <div className="billIdnCat">
          <h3>#<strong>XM9141</strong></h3>
          <p>Grafik Dizayn</p>
        </div>
        <div className="companyAddress">
          <p>19 Uninon Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>

      <div>
        <div className="billDatenAddress">
          <div className="dates">
            <p>Fatura Tarihi</p>
            <strong>21 Ağts 2021</strong>
            <p>Son Ödeme Tarihi</p>
            <strong>20 Eylül 2021</strong>
          </div>
          <div className="customerAddress">
            <p>Fatura Sahibi</p>
            <p>84 Church Way</p>
            <p>Bradford</p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
        </div>
      

        <div className="customerEmail">
          <p>Gönderilen</p>
          <strong>alexgrim@mail.com</strong>
        </div>
      </div>
      <div className="cart">
        <div className="productDetails">
          <strong>Banner Design</strong>
          <p>1 x £ 156.00</p>
        </div>
        <div className="productTotal">
          <strong>£ 156.00</strong>
        </div>

        <div className="grandTotal">
          <p>Grand Total</p>
          <h2>£ 556.00</h2>
        </div>
      </div>

      <div className="detailsButtons">
        <button>Düzenle</button>
        <button>Sil</button>
        <button>Ödendi Olarak İşaretle</button>
      </div>
    </div>
  )
}