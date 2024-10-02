import { SIZES } from "@/constants/theme";
import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import CashierPhone from "./CashierPhone";
import CashierTablet from "./CashierTablet";
// import App from "../(tabs)/_layout";

interface filterType {
  name: string;
  value: string | number;
}

const Cashier = () => {
  const [active, setActive] = useState<filterType>({
    name: "filter",
    value: "",
  });
  const filter = [
    { name: "filter", value: "" },
    { name: "Aktif", value: 20 },
    { name: "Terbaru", value: "" },
    { name: "Nonaktif", value: 5 },
  ];
  const [product, setProduct] = useState([
    { name: "product 1", price: "10000", stock: 20000, id: 1 },
    { name: "product 2", price: "10000", stock: 20000, id: 2 },
    { name: "product 2", price: "10000", stock: 20000, id: 3 },
    { name: "product 2", price: "10000", stock: 20000, id: 4 },
    { name: "product 2", price: "10000", stock: 20000, id: 5 },
    { name: "product 2", price: "10000", stock: 20000, id: 6 },
    { name: "product 2", price: "10000", stock: 20000, id: 7 },
    { name: "product 2", price: "10000", stock: 20000, id: 8 },
    { name: "product 2", price: "10000", stock: 20000, id: 9 },
    { name: "product 2", price: "10000", stock: 20000, id: 10 },
  ]);
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <>
      {SIZES.isTablet ? (
        <CashierTablet
          product={product}
          statusBarHeight={statusBarHeight}
          setActive={setActive}
          active={active}
          filter={filter}
        />
      ) : (
        <CashierPhone
          product={product}
          statusBarHeight={statusBarHeight}
          setActive={setActive}
          active={active}
          filter={filter}
        />
      )}
    </>
  );
};

export default Cashier;
