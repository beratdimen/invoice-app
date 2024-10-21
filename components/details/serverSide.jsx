export default async function Customer(id) {
  const response = await fetch(
    `https://invoiceapp.bariscakdi.com.tr/api/Client/GetClients
`
  );
  const data = await response.json();
  console.log(data);

  return (
    <>
      {data.map((x) => (
        <div key={x.id} className="billDatenAddress">
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
            <strong>{x.name}</strong>
            <p>84 Church Way</p>
            <p>Bradford</p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
        </div>
      ))}
    </>
  );
}
