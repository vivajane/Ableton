import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Overview from "../components/shopComponents/Overview";
import Live from "../components/shopComponents/Live";
import Push from "../components/shopComponents/Push";
import Move from "../components/shopComponents/Move";

const ShopPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route index element={<Overview />}>
          <Route path="overvieww" element={<Overview />} />
          <Route path="live" element={<Live />} />
          <Route path="push" element={<Push />} />
          <Route path="move" element={<Move />} />
          {/* <Route path='overvieww' element={<Overview/>}/>
        <Route path='overvieww' element={<Overview/>}/> */}
        </Route>
      </Routes>
      
    </div>
  );
};

export default ShopPage;
