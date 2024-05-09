import { useSelector } from "react-redux";

const Modal = ({ closeModal }) => {
  const { modalTitle, modalSub } = useSelector((store) => store.functionalities);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-50">
        <div className="text-right">
          <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{modalTitle}</h2>
          <p className="text-lg">{modalSub}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;