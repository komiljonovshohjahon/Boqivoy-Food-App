import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Slider from "@react-native-community/slider";

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.textStyle}>
        {result.rating} Baho, {result.review_count} Sharhlar
      </Text>
      <Slider />
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginLeft: 15,
  },
  textStyle: {
    marginLeft: 15,
    fontSize: 15,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
