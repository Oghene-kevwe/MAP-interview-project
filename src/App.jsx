import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout } from "./pages/sharedLayout";
import { Homepage } from "./pages/homepage";
import { RespondQoute } from "./components/procurement/respondQoute/respondQoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="qoute-response" element={<RespondQoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
