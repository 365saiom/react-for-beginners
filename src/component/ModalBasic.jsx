export default function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <p>모달창입니다</p>
    </div>
  );
}
