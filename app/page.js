import BillTo from "@/components/bill-to";

import BillForm from "@/components/bill-form";

export default function Home() {
  return (
    <>
      <form>
        <BillForm />
        <BillTo />
      </form>
    </>
  );
}
