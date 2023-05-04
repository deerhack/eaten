import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import AddEvents from "./pages/AddEvents";
import QR from "./pages/QR";
import QRScanner from "./pages/Scan";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/add-event" element={<AddEvents />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan-qr" element={<QR />} />
          <Route path="/scan" element={<QRScanner />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
