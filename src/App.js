import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  var productList = [
    {
      name: "redmi",
      price: 23000,
      quantity: 0,
    },
    {
      name: "oneplus",
      price: 40000,
      quantity: 0,
    },
    {
      name: "Iphone",
      price: 70000,
      quantity: 0,
    },
  ];
  var [productList, setproductList] = useState(productList);
  var [totalAmount, settotalAmount] = useState(0);

  const IncrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount);
    setproductList(newProductList);
  };
  const DecrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }

    setproductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setproductList(newProductList);
    settotalAmount(0);
  };
  const removeQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setproductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const AddItemQuantity = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setproductList(newProductList);
  };

  return (
    <>
      <Navbar />

      <main className="container mt-5 ml-12">
        <AddItem AddItemQuantity ={AddItemQuantity}/>
        <ProductList
          productList={productList}
          IncrementQuantity={IncrementQuantity}
          DecrementQuantity={DecrementQuantity}
          removeQuantity={removeQuantity}
        />
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
      </main>
    </>
  );
}

export default App;
