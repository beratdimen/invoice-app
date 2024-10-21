import './style.css'

export default function FormButtons(){

  return(
    <div className="draftorSubmit">
      <button className='delete'>Sil</button>
      <button className='saveAsSummary'>Taslak Olarak Kaydet</button>
      <button className='save'>Kaydet & Gönder</button>
    </div>
  )
}