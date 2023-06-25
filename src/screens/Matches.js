import { SafeAreaView, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import styles from "../styles/global";

export default function Matches({ route }) {
  console.log(route.params);
  const { matches } = route.params;
  const renderItem = ({ item }) => (
    <ScrollView
      style={{ marginTop: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <Cards
        icon="ios-people-sharp"
        style={styles.textDash}
        title={item}
        bg="#FFF"
        number="1"
      />
    </ScrollView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textDash}>Matches</Text>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 10, display: "flex", placeContent: "center"}}
        horizontal
      />
    </SafeAreaView>
  );
}
