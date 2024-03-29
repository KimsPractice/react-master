import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:coinId" element={<Coin />}>
        <Route path={"price"} element={<Price />} />
        <Route path={"chart"} element={<Chart />} />
      </Route>
      <Route path="/" element={<Coins />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
