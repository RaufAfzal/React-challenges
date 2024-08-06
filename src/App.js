  import { useRef } from "react";
  import Modal from "./Modal";

  function App() {

    const modalRef = useRef();

    const handleOpenModal = () => {
      modalRef.current.openModal();
    }

    console.log('Parent rendered')

    return (
      <main className='App'>
      <Modal ref={modalRef}/>
      <button onClick={handleOpenModal}>Open Modal</button>
      </main>
    );
  }

  export default App;
