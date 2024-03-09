// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
//   // data / fetch;
//   return (
//     <>
//       {/* <div>
//         <h1>Data from "alt" Table</h1>
//         {data.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>Category: {item.category}</p>
//             <p>Price: {item.price}</p>
//             <p>Description: {item.desc}</p>
//             <img
//               src={`http://localhost:2000/${item.img}`}
//               alt={`http://localhost:2000/${item.img}`}
//             />
//           </div>
//         ))}
//       </div> */}

//       <div className="section-center">
//         {data.map((item) => {
//           // const { id, title, img, desc, price } = menuItem;
//           return (
//             <article key={item.id} className="menu-item">
//               <img
//                 src={`http://localhost:2000/${item.img}`}
//                 alt={item.title}
//                 className="photo"
//               />
//               <div className="item-info">
//                 <header>
//                   <h4>{item.title}</h4>
//                   <h4 className="price">${item.price}</h4>
//                 </header>
//                 <p className="item-text">{item.desc}</p>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default FetchData;
// //latest up
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/data/fetch")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:2000/data/delete/${id}`)
//       .then((response) => {
//         console.log("Data deleted successfully!");
//         fetchData(); // Fetch updated data after deletion
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   return (
//     <div className="section-center">
//       {data.map((item) => (
//         <article key={item.id} className="menu-item">
//           <img
//             src={`http://localhost:2000/${item.img}`}
//             alt={item.title}
//             className="photo"
//           />
//           <div className="item-info">
//             <header>
//               <h4>{item.title}</h4>
//               <h4 className="price">${item.price}</h4>
//             </header>
//             <p className="item-text">{item.desc}</p>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// };

// export default FetchData;
// // latest final
//version 12 up

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     price: "",
//     img: null,
//     desc: "",
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:2000/data/fetch")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:2000/data/delete/${id}`)
//       .then((response) => {
//         console.log("Data deleted successfully!");
//         fetchData(); // Fetch updated data after deletion
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   const handleUpdate = (item) => {
//     setFormData({
//       id: item.id,
//       title: item.title,
//       category: item.category,
//       price: item.price,
//       img: null,
//       desc: item.desc,
//     });
//   };

//   const handleFormChange = (e) => {
//     if (e.target.name === "img") {
//       setFormData({ ...formData, img: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const updatedData = new FormData();
//     updatedData.append("title", formData.title);
//     updatedData.append("category", formData.category);
//     updatedData.append("price", formData.price);
//     updatedData.append("img", formData.img);
//     updatedData.append("desc", formData.desc);

//     axios
//       .put(`http://localhost:2000/data/update/${formData.id}`, updatedData)
//       .then((response) => {
//         console.log("Data updated successfully!");
//         fetchData(); // Fetch updated data
//         setFormData({
//           id: "",
//           title: "",
//           category: "",
//           price: "",
//           img: null,
//           desc: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//       });
//   };

//   return (
//     <div className="section-center">
//       {data.map((item) => (
//         <article key={item.id} className="menu-item">
//           <img
//             src={`http://localhost:2000/${item.img}`}
//             alt={item.title}
//             className="photo"
//           />
//           <div className="item-info">
//             <header>
//               <h4>{item.title}</h4>
//               <h4 className="price">${item.price}</h4>
//             </header>
//             <p className="item-text">{item.desc}</p>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//             <button onClick={() => handleUpdate(item)}>Update</button>
//           </div>
//         </article>
//       ))}

//       {formData.id && (
//         <div className="update-form">
//           <h2>Edit Data</h2>
//           <form onSubmit={handleFormSubmit}>
//             <label>
//               Title:
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleFormChange}
//               />
//             </label>
//             <br />
//             <label>
//               Category:
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleFormChange}
//               />
//             </label>
//             <br />
//             <label>
//               Price:
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleFormChange}
//               />
//             </label>
//             <br />
//             <label>
//               Image:
//               <input
//                 type="file"
//                 name="img"
//                 accept="image/*"
//                 onChange={handleFormChange}
//               />
//             </label>
//             <br />
//             <label>
//               Description:
//               <textarea
//                 name="desc"
//                 value={formData.desc}
//                 onChange={handleFormChange}
//               />
//             </label>
//             <br />
//             <button type="submit">Update Data</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchData;
// update with out id up

// FetchData.js

// FetchData.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:2000/data/fetch")
      .then((response) => {
        setData(response.data);
        setEditData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleEditChange = (e, index) => {
    const { name, value } = e.target;
    setEditData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    setEditData((prevData) => {
      const newData = [...prevData];
      newData[index].img = file;
      return newData;
    });
  };

  const handleUpdate = (id, index) => {
    const updatedData = editData[index];
    const formData = new FormData();
    formData.append("title", updatedData.title);
    formData.append("category", updatedData.category);
    formData.append("price", updatedData.price);
    formData.append("img", updatedData.img);
    formData.append("desc", updatedData.desc);

    axios
      .put(`http://localhost:2000/data/update/${id}`, formData)
      .then((response) => {
        console.log("Data updated successfully!");
        fetchData();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="section-center">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  name="title"
                  value={editData[index].title}
                  onChange={(e) => handleEditChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={editData[index].category}
                  onChange={(e) => handleEditChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={editData[index].price}
                  onChange={(e) => handleEditChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, index)}
                />
              </td>
              <td>
                <textarea
                  name="desc"
                  value={editData[index].desc}
                  onChange={(e) => handleEditChange(e, index)}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(item.id, index)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
