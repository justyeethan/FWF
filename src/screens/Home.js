import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import Deck from "../components/Deck";
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";
import styles from "../styles/global";

const DATA = [
  {
    id: 1,
    title: "Matches",
    number: "2",
    icon: "fast-food",
  },
  {
    id: 2,
    title: "TOTAL DEATHS",
    number: "1 29 863",
    icon: "fast-food",
  },
  {
    id: 3,
    title: "RECOVERED",
    icon: "fast-food",
    number: "838 456",
  },
];

const renderCard = (item) => {
  return (
    <View key={item.id} style={styles.cardContainer}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Icon
            name="ios-remove"
            size={40}
            color="red"
            style={{ marginTop: 15 }}
          />
          <Text style={styles.number}>{item.number}</Text>
        </View>
        <View style={{ marginLeft: 150 }}>
          <Icon name={item.icon} size={24} color="#FFF" />
          <Text style={styles.textCovid}>Fast Food</Text>
        </View>
      </View>
    </View>
  );
};

const renderNoMoreCards = () => {
  return (
    <View title="All Done!">
      <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
      <Button backgroundColor="#03A9F4" title="Get more!" />
    </View>
  );
};

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/unnamed.jpg")}
        style={styles.map}
      >
        {/* <View style={styles.col}>
          <View style={{ width: "50%" }}>
            <Icon name="md-remove" color="#FFF" size={26} />
            <Icon
              name="md-remove"
              color="#FFF"
              size={26}
              style={styles.minusIcon}
            />
          </View>
          <View style={styles.avatarContainer}>
            <Image source={require("../images/1.jpeg")} style={styles.avatar} />
          </View>
        </View> */}
        <Text style={styles.textDash}>Food With Friends</Text>
        <Button
          title="Test"
          onPress={() =>
            navigation.navigate("Matches", {
              matches: ["McDonalds", "Sizzle & Crunch", 'KFC'],
            })
          }
        />

        <View style={styles.colContainer}>
          <Text style={styles.textGlobal}>Dashboard</Text>
          <Text style={styles.textRussia}>Friends</Text>
          <Text style={styles.textRussia}>Profile</Text>
        </View>
      </ImageBackground>
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeLeft={() => console.log("swipe left")}
        onSwipeRight={() => console.log("swipe right")}
      />
      <ScrollView
        style={{ marginTop: 170 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Cards
          // onPress={() => navigation.navigate("Detail")}
          onPress={() => null}
          icon="md-alert-sharp"
          title="Pending Invites"
          bg="red"
          number="4"
        />
        <Cards
          icon="ios-people-sharp"
          title="Friends Online"
          bg="#FFF"
          number="120"
        />
        <Cards icon="map" title="Explore" bg="#FFF" number="120" />
      </ScrollView>
      <View style={{ marginBottom: 34 }}>
        <Buttons name="Favorites" number="129 Restuarants" />
        <Buttons name="Friends" number="304 People" />
      </View>
    </SafeAreaView>
  );
}
