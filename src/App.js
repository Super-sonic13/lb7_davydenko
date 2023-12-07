import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import GoodsList from "./components/GoodsList";
import axios from "axios"; 
function App() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    // Make a GET request to the FakeStore API
    axios
      .get("https://fakestoreapi.com/products?limit=9")
      .then((response) => {
        // Assuming the API returns an array of products, you can update the state
        setGoods(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Content />
      <GoodsList goods={goods} />
      <Footer />
    </div>
  );
}

export default App;
