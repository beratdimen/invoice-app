import DeleteButton from "./item-list-delete-button/page";


export default function NewItemCreate({ error, invoinceData }) {

  return (
    <div className="new-item-form">
      <div className="form-item">
        <label htmlFor="itemName">Öğe Adı</label>
        <input
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Öğe Adı"
          defaultValue={invoinceData ? invoinceData?.items[0]?.name : null}
        />
        {error?.itemName && <p className="error">{error.itemName}</p>}
      </div>

      <div className="form-item-row">
        <div className="form-item">
          <label htmlFor="qty">Adet</label>
          <input
            type="number"
            name="qty"
            id="qty"
            placeholder="Adet"
            defaultValue={
              invoinceData ? invoinceData?.items[0]?.quantity : null
            }
          />
          {error?.qty && <p className="error">{error.qty}</p>}
        </div>

        <div className="form-item">
          <label htmlFor="price">Fiyat</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Fiyat"
            defaultValue={invoinceData ? invoinceData?.items[0]?.price : null}
          />
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

        
        <DeleteButton />
      </div>
    </div>
  );
}
