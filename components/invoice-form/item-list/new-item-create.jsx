import DeleteButton from "./item-list-delete-button/page";

export default function NewItemCreate({ error }) {
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
  }

  return (
    <div className="new-item-form" key={makeid(6)}>
      <div className="form-item">
        <label htmlFor="itemName">Öğe Adı</label>
        <input type="text" name="itemName" id="itemName" placeholder="Öğe Adı" />
        {error?.itemName && <p className="error">{error.itemName}</p>}
      </div>

      <div className="form-item-row">
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
          <input type="number" name="total" id="total" value={400.0} placeholder="Toplam" readOnly />
          {error?.total && <p className="error">{error.total}</p>}
        </div>

        <input type="hidden" value={makeid(6)}/>
        <DeleteButton makeid={makeid(6)}/>
      </div>
    </div>
  );
}
