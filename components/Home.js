import * as React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { categoriesData, categoriesData2 } from "../assets/data/categoriesData";
import { styles } from "../assets/styles/styles";
import { useFonts } from "expo-font"; 
import AppLoading from 'expo-app-loading';
import { renderCategoryItemOne, renderCategoryItemTwo } from "./Row";


Feather.loadFont();

export const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/*SEARCH */}

        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="black" />
          <TextInput style={styles.searchText} placeholder="Search"></TextInput>
        </View>

        {/*BUTTON TABS */}

        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.button,
            ]}
          >
            <Text style={styles.text}>Dates</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.button,
            ]}
          >
            <Text style={styles.text}>Guests</Text>
          </Pressable>
        </View>

        {/*CATEGORIES */}

        <View style={{ marginTop: 10 }}>
          <Text style={styles.categoriesTitle}>
            What can we help you find Charlotte
          </Text>
          <View style={styles.categoriesListBox}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItemOne}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.categoriesTitle}>
            What can we help you find Charlotte
          </Text>
          <View style={styles.categoriesListBox}>
            <FlatList
              data={categoriesData2}
              renderItem={renderCategoryItemTwo}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <Text style={styles.categoriesTitle}>Top-Rated Experience</Text>
        <Text style={styles.categoriesTitle2}>
          Book activities led by local hosts on your next trip
        </Text>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1.0 }]}>
          <View style={styles.categoriesListBox}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItemOne}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );}
};
