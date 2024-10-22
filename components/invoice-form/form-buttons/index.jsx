import './buttons.css'

export default function FormButtons(){

  return(
    <div className="draft-or-submit">
      <button className='delete'>Sil</button>
      <button className='save-as-summary'>Taslak Olarak Kaydet</button>
      <button className='save'>Kaydet & Gönder</button>
    </div>
  )
}