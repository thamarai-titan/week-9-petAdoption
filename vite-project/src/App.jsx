import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";

function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);  // Update state with form data
  };

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/form">Form</Link>
          <Link to="/table">Table</Link>
        </nav>
        <Routes>
          <Route path="/form" element={<Form onSubmit={handleFormSubmit} />} />
          <Route path="/table" element={<Table data={formData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
