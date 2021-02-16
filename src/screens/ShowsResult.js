import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ShowsResult = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(id) => id}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.phoneStyle}>Phone Number {result.phone} </Text>
    </View>
  );
};

export default ShowsResult;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginLeft: 15,
    marginBottom: 20,
    alignSelf: "center",
  },

  nameStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 15,
    alignSelf: "center",
  },
  phoneStyle: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
  },
});
