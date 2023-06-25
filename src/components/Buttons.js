import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Buttons = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.textInfo}>i</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.btnName}>{props.name}</Text>
        <Text style={styles.number}>{props.number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: "#6a706e",
    borderWidth: 0.3,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2b3240",
  },
  textInfo: {
    color: "#6a706e",
    fontWeight: "bold",
  },
  btnName: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 12,
    marginLeft: 20,
  },
  number: {
    fontWeight: "bold",
    color: "red",
    fontSize: 14,
    textAlign: "justify",
    // marginLeft: 20,
  },
});

export default Buttons;
