import { DeleteIcon } from "@/helpers/icons"
import "./item-list.css"

export default function ItemList() {
    return (
        <div className="item-list">
            <h3>Öğe Listesi</h3>

            <div className="items">
                <div className="new-item">
                    <div className="form-item">
                        <label htmlFor="item-name">Öğe Adı</label>
                        <input type="text" name="item-name" id="item-name" placeholder="Öğe Adı"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="qty">Adet</label>
                        <input type="text" name="qty" id="qty" placeholder="Adet"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="price">Fiyat</label>
                        <input type="text"  name="price" id="price" placeholder="Fiyat"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="total">Toplam</label>
                        <input type="text"  name="total" id="total" value={400.00} placeholder="Toplam"/>
                    </div>

                    <button><DeleteIcon/></button>
                </div>

                <div className="new-item">
                    <div className="form-item">
                        <label htmlFor="item-name">Öğe Adı</label>
                        <input type="text" name="item-name" id="item-name" placeholder="Öğe Adı"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="qty">Adet</label>
                        <input type="text" name="qty" id="qty" placeholder="Adet"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="price">Fiyat</label>
                        <input type="text"  name="price" id="price" placeholder="Fiyat"/>
                    </div>

                    <div className="form-item">
                        <label htmlFor="total">Toplam</label>
                        <input type="text"  name="total" id="total" value={400.00} placeholder="Toplam"/>
                    </div>

                    <button><DeleteIcon/></button>
                </div>
            </div>

            <button className="add-new-button">+ Yeni Öğe Ekle</button>
        </div>
    )
  }
  