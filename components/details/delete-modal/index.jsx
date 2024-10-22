"use client";

import { useRef } from "react";
import "../details-page.css";
import { useRouter } from "next/navigation";

export default function DetailDeleteModal({ data }) {
  const confirmDeleteModal = useRef();
  const router = useRouter();

  const openDialog = () => {
    if (confirmDeleteModal.current) {
      confirmDeleteModal.current.showModal();
    }
  };

  const closeDialog = () => {
    if (confirmDeleteModal.current) {
      confirmDeleteModal.current.close();
    }
  };

  return (
    <>
      <button onClick={openDialog}>Sil</button>
      <dialog className="confirm" ref={confirmDeleteModal}>
        <h2>Silmeyi Onayla</h2>
        <p>
          {data?.invoiceName} numaralı faturayı silmek istediğinizden emin
          misiniz? Bu eylem geri alınamaz.
        </p>
        <div className="confirmButtons">
          <button onClick={closeDialog}>Vazgeç</button>
          <button
            onClick={() => {
              closeDialog();
              router.push(`../detail/${data?.id}/delete`);
            }}
          >
            Sil
          </button>
        </div>
      </dialog>
    </>
  );
}
