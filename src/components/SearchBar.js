import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchScreen = ({ term, onTermChange, onTermEnd }) => {
  return (
    <View style={styles.searchBox}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Qidirish"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermEnd}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBox: {
    height: 70,
    backgroundColor: "#ddbea9",
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    paddingBottom: 0,
    marginVertical: 20,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 25,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
