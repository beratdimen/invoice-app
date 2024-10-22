import Details from "@/components/details";
import Header from "@/components/header";

export default function DetailsPage({ params }){

  return (
    <div className="container">
      <Header />
      
      <div className="details-page">
        <Details />
      </div>
    </div>
  )
}