// import React, { useState } from "react";
// import axios from "axios";

// const UpdateData = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     price: "",
//     img: null,
//     desc: "",
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "img") {
//       setFormData({ ...formData, img: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("category", formData.category);
//     data.append("price", formData.price);
//     data.append("img", formData.img);
//     data.append("desc", formData.desc);

//     axios
//       .put(`http://localhost:2000/data/update/${formData.id}`, data)
//       .then((response) => {
//         console.log("Data updated successfully!");
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   return (
//     <div>
//       <h1>Update Data in "alt" Table</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           ID:
//           <input
//             type="number"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Image:
//           <input
//             type="file"
//             name="img"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea name="desc" value={formData.desc} onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Update Data</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateData;
// works well update up

import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateData = () => {
  // const [formData, setFormData] = useState({
  //   id: "",
  //   title: "",
  //   category: "",
  //   price: "",
  //   img: null,
  //   desc: "",
  // });
  // const [dataList, setDataList] = useState([]);
  // useEffect(() => {
  //   fetchDataList();
  // }, []);
  // const fetchDataList = () => {
  //   axios
  //     .get("http://localhost:2000/data")
  //     .then((response) => {
  //       setDataList(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };
  // const handleChange = (e) => {
  //   if (e.target.name === "img") {
  //     setFormData({ ...formData, img: e.target.files[0] });
  //   } else {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   }
  // };
  // const handleUpdate = (data) => {
  //   setFormData(data);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("title", formData.title);
  //   data.append("category", formData.category);
  //   data.append("price", formData.price);
  //   data.append("img", formData.img);
  //   data.append("desc", formData.desc);
  //   axios
  //     .put(`http://localhost:2000/data/update/${formData.id}`, data)
  //     .then((response) => {
  //       console.log("Data updated successfully!");
  //       fetchDataList();
  //       setFormData({
  //         id: "",
  //         title: "",
  //         category: "",
  //         price: "",
  //         img: null,
  //         desc: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error updating data:", error);
  //     });
  // };
  // return (
  //   <div>
  //     <h1>Update Data in "alt" Table</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         ID:
  //         <input
  //           type="number"
  //           name="id"
  //           value={formData.id}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Title:
  //         <input
  //           type="text"
  //           name="title"
  //           value={formData.title}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Category:
  //         <input
  //           type="text"
  //           name="category"
  //           value={formData.category}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Price:
  //         <input
  //           type="number"
  //           name="price"
  //           value={formData.price}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Image:
  //         <input
  //           type="file"
  //           name="img"
  //           accept="image/*"
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Description:
  //         <textarea name="desc" value={formData.desc} onChange={handleChange} />
  //       </label>
  //       <br />
  //       <button type="submit">Update Data</button>
  //     </form>
  //     <h2>Data List</h2>
  //     <ul>
  //       {dataList.map((data) => (
  //         <li key={data.id}>
  //           <span>ID: {data.id}</span>
  //           <span>Title: {data.title}</span>
  //           <span>Category: {data.category}</span>
  //           <span>Price: {data.price}</span>
  //           <span>Desc: {data.desc}</span>
  //           <button type="button" onClick={() => handleUpdate(data)}>
  //             Update
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default UpdateData;
// latest finally
