import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InsertData from "./InsertData";
import FetchData from "./FetchData";
import Update from "./Update";

const Insert = () => {
  return (
    <>
      <Update />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/insert">Insert Data</Link>
              </li>
              <li>
                <Link to="/fetch">Fetch Data</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/insert" element={<InsertData />} />
            <Route path="/fetch" element={<FetchData />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Insert;
