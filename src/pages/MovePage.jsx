import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Move from './Move';
import Overview from './Overview';
import Moree from './Moree';
import Buy from './Buy';
import Login from './Login';
import Specs from './Specs';

const MovePage = () => {
  return (
    <div className="move-page">
        
      {/* Parent container for Move and its child components */}
      <Routes>
        <Route path="/" element={<Move />}>
        <Route index element= {<Overview  /> }/>
          <Route path="overview" element={<Overview  />} />
          <Route path="learn" element={<Moree />}/>
          <Route path="buy" element={<Buy />} />
          <Route path="specs" element={<Specs />} />
        </Route>

      </Routes>
      
    </div>
  );
};

export default MovePage;
