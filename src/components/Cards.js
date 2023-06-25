import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon2 from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cards({ icon, title, bg, number, onPress }) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bg,
      }}
    >
      <View style={styles.col}>
        <Icon
          name={icon}
          size={30}
          color={bg == "red" ? "#FFF" : "red"}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon2
            style={{ marginLeft: 50 }}
            name="dots-vertical"
            size={30}
            color="#b8b8aa"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          ...styles.number,
          color: bg == "red" ? "#FFF" : "#000",
        }}
      >
        {number}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 130,
    borderRadius: 30,
    padding: 15,
    marginLeft: 20,
  },
  col: {
    flexDirection: "row",
  },
  title: {
    marginTop: 90,
    color: "#b8b8aa",
    fontWeight: "bold",
    fontSize: 12,
  },
  number: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
