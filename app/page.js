import BillTo from "@/components/bill-to";

import BillForm from "@/components/bill-form";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <>
      <Header />
      <form>
        <BillForm />
        <BillTo />
      </form>
    </>
  );
}
