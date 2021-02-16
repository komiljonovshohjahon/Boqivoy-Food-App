import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "../components/ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultScreen", { id: item.id })}
          >
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList);
