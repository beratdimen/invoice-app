import { GoBack } from '@/helpers/icons'
import './style.css'
import Link from 'next/link'
export default function Details() {

  return (
    <div className="detailsContainer">
      <div className="return">
        <Link href={'/'}><GoBack /> Geri Dön</Link>
      </div>
      <div className="desktopButtons">
        <div className="status">
          <p>Status</p>
          <span>Pending</span>
        </div>
        <div className="detailsButtons desktop">
          <button>Düzenle</button>
          <button>Sil</button>
          <button>Ödeme Yapıldı</button>
        </div>
      </div>

      <div className='desktopAdress'>
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

      <div className='desktopAddressMail'>
        <div className="billDatenAddress">
          <div className="dates">
            <div>
              <p>Fatura Tarihi</p>
              <strong>21 Ağts 2021</strong>
            </div>
            <div>
              <p>Son Ödeme Tarihi</p>
              <strong>20 Eylül 2021</strong>
            </div>
          </div>
          <div className="customerAddress">
            <p>Fatura Sahibi</p>
            <strong>Alex Grim</strong>
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
        <div className="cartSections">
          <p>Ürün Adı</p>
          <p>Adet</p>
          <p>Fiyat</p>
          <p>Toplam</p>
        </div>
        <div className="cartItemDesktop">
          <input type="text" name="itemName" readOnly defaultValue={'Banner Design'} />
          <input type="text" name="quantity" readOnly defaultValue={1} />
          <input type="text" name="price" readOnly defaultValue={'£ 156.00'} />
          <input type="text" name="total" readOnly defaultValue={'£ 556.00'} />
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
        <button>Sil</button>
        <button>Ödeme Yapıldı</button>
      </div>
    </div>
  )
}