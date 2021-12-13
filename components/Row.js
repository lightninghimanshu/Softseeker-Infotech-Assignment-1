import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import { styles } from "../assets/styles/styles";
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();
export const renderCategoryItemOne = ({ item }) => {
    return (
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1.0 }]}>
        <View
          style={[
            styles.categoryItemBox,
            {
              marginLeft: item.id == 1 ? 20 : 0,
              backgroundColor: "white",
              marginBottom: 16,
            },
          ]}
        >
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };
 export const renderCategoryItemTwo = ({ item }) => {
    return (
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1.0 }]}>
        <View
          style={[
            styles.categoryItemBox,
            {
              backgroundColor: "white",
              marginLeft: item.id == 1 ? 20 : 0,
              marginBottom: 20,
            },
          ]}
        >
          <View style={[styles.categorySelectBox]}>
            <Feather
              name="search"
              size={20}
              style={styles.categorySelectIcon}
              color="#7a7a7a"
            />
          </View>

          <Text style={styles.category2ItemTitle}>{item.title}</Text>
          <Text style={styles.category2ItemText}>{item.text}</Text>
        </View>
      </Pressable>
    );
  };

