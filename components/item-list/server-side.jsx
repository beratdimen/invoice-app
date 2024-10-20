import { DeleteIcon } from "@/helpers/icons";

export default function NewItemComponent({ error }) {
  console.log(error);
  return (
    <div className="new-item">
      <div className="form-item">
        <label htmlFor="itemName">Öğe Adı</label>
        <input
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Öğe Adı"
        />
        {error?.itemName && <p className="error">{error.itemName}</p>}
      </div>

      <div className="form-item">
        <label htmlFor="qty">Adet</label>
        <input type="number" name="qty" id="qty" placeholder="Adet" />
        {error?.qty && <p className="error">{error.qty}</p>}
      </div>

      <div className="form-item">
        <label htmlFor="price">Fiyat</label>
        <input type="number" name="price" id="price" placeholder="Fiyat" />
        {error?.price && <p className="error">{error.price}</p>}
      </div>

      <div className="form-item">
        <label htmlFor="total">Toplam</label>
        <input
          type="number"
          name="total"
          id="total"
          value={400.0}
          placeholder="Toplam"
          readOnly
        />
        {error?.total && <p className="error">{error.total}</p>}
      </div>

      <button>
        <DeleteIcon />
      </button>
    </div>
  );
}
