import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const priceResult = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermEnd={() => searchApi(term)}
      />
      {error ? <Text style={{ alignItems: "center" }}>{error}</Text> : null}
      <ScrollView>
        <ResultsList results={priceResult("$")} title="Can Efford" />
        <ResultsList results={priceResult("$$")} title="Expensive" />
        <ResultsList results={priceResult("$$$")} title="Very Expensive" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
