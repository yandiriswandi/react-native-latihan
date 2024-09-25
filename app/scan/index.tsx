import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import Container from "@/components/Container";
import { COLORS, SIZES } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ScanBoxIcon from "../.././assets/svg/scanBox.svg";
import ScanIcon from "../../assets/svg/bottomNavigator/qr.svg";
import { RFValue } from "react-native-responsive-fontsize";

const BarcodeScannerExample: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setScannedData(data); // Data dari barcode yang dipindai
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={{ width: 30 }} onPress={() => router.back()}>
          <Ionicons
            size={25}
            name="close"
            color="white"
            style={{ fontWeight: 600 }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.text}>Scan Your Product</Text>
        </View>
      </View>
      <View style={styles.containerCamera}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {/* Kotak scan di tengah layar */}
        <ScanBoxIcon />
        <View style={styles.containerScanButton}>
          <View style={styles.scanButton}>
            <ScanIcon />
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Poppins-SemiBold",
              fontSize: RFValue(12),
            }}
          >
            Scan Now
          </Text>
        </View>

        {scanned && (
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.primary, paddingHorizontal: 20 },

  containerCamera: {
    // Lebar yang ditentukan
    marginTop: 30,
    height: SIZES.height * 0.6, // Tinggi yang ditentukan
    justifyContent: "center",
    alignItems: "center",
    // overflow: "hidden", // Menyembunyikan bagian yang keluar dari border radius
    // backgroundColor: "black", // Latar belakang hitam di luar area kamera
    overflow: "visible",
  },
  dataText: {
    fontSize: 18,
    color: "white",
    marginTop: 20,
  },
  // Gaya untuk kotak scan
  containerHeader: {
    flexDirection: "row",
    padding: 10,
  },
  containerScanButton: {
    position: "absolute",
    bottom: -80,
    // marginBottom:-12,
    zIndex: 50,
    flexDirection: "column",
    gap: 10,
  },
  scanButton: {
    padding: 15,
    backgroundColor: COLORS.primary,
    // position: "absolute",
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 4,
  },
  text: {
    textAlign: "justify",
    color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});

export default BarcodeScannerExample;
