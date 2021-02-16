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
      {error ? <Text>{error}</Text> : null}
      {/* <Text>There are {result.length} results found.</Text> */}
      <ScrollView>
        <ResultsList results={priceResult("$")} title="Chidasa Bo'ladi" />
        <ResultsList results={priceResult("$$")} title="Qimmatroq" />
        <ResultsList results={priceResult("$$$")} title="Vabshee Qimmat" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
