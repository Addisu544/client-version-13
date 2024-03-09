// import React, { useState, useEffect } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";

// function App() {
//   const [menu, setMenu] = useState([]);
//   const [menuItems, setMenuItems] = useState(menu);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("/api")

//       .then((res) => res.json())
//       .then((data) => {
//         setMenu(data.foods);
//         setMenuItems(data.foods);
//         console.log("data from server", data.foods);
//         const allCategories = [
//           "all",
//           ...new Set(data.foods.map((item) => item.category)),
//         ];
//         setCategories(allCategories);
//       });
//   }, []);

//   const filterItems = (category) => {
//     console.log("click", category);
//     if (category === "all") {
//       setMenuItems(menu);
//       return;
//     }

//     const newItems = menu.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   console.log("data from browser", menu);

//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline" />
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import MenuTemplate from "./MenuTemplate";
import Categories from "./Categories";
import axios from "axios";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2000/data/fetch");
      if (response.status === 200) {
        const data = response.data;
        setMenu(data);
        setMenuItems(data);
        console.log("menu", menu);
        console.log("menu items", menuItems);
        const allCategories = data
          ? ["all", ...new Set(data.map((item) => item.category))]
          : [];
        setCategories(allCategories);
        setIsLoading(false);
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = (
      <div>
        Error: {error}
        <br />
        Please try again later.
      </div>
    );
  } else {
    content = (
      <>
        <Categories categories={categories} filterItems={filterItems} />
        {menuItems && menuItems.length > 0 ? (
          <MenuTemplate items={menuItems} />
        ) : (
          <div>No menu items found.</div>
        )}
      </>
    );
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {content}
      </section>
    </main>
  );
}

export default Menu;
