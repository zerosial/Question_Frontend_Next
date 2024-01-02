import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "./Components/Header/index.js";
import { QuestionLayout } from "./Page/question/QuestionLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Modal } from "Components/Modal";
import { useModalStore } from "store/useModalStore";
const queryClient = new QueryClient();

function App() {
  const { isModalOpen, modalContent, closeModal } = useModalStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Modal isOpen={isModalOpen} content={modalContent} onClose={closeModal} />
      <div className="App">
        <Header />
        <QuestionLayout />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
