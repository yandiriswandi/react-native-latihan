import Container from "@/components/Container";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import HeaderCustomer from "./component/HederCustomer";
import CustomerList from "./component/CustomerList";

const Customer = () => {
  const router: any = useRouter();
  return (
    <Container>
      <HeaderCustomer />
      <CustomerList/>
    </Container>
  );
};

export default Customer;

const styles = StyleSheet.create({});
