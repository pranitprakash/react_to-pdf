// import logo from "./logo.svg";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./reactPdf";

function App() {
  return (
    <>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </>
  );
}

export default App;
