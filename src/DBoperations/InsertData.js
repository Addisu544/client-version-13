import React, { useState } from "react";
import axios from "axios";

const InsertData = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
    img: null,
    desc: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", formData.id);
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("img", formData.img);
    data.append("desc", formData.desc);

    axios
      .post("http://localhost:2000/data/insert", data)
      .then((response) => {
        console.log("Data inserted successfully!");
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };

  return (
    <div>
      <h1>Insert Data into "alt" Table</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
          ID:
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label> */}
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* <label>
          Image:
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={handleChange}
          />
        </label> */}
        <label>
          Image:
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea name="desc" value={formData.desc} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Insert Data</button>
      </form>
    </div>
  );
};

export default InsertData;
