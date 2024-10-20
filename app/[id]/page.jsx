import Details from "@/components/details";
import Header from "@/components/header/page";

export default function DetailsPage(){

  return (
    <>
      <div style={{display: "flex"}} className="detailsPage">
        <Header />
        <Details />
      </div>
    </>
  )
}