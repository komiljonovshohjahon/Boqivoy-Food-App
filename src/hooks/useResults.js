import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResult(response.data.businesses);
    } catch (e) {
      setError("ERROR!");
    }
  };

  useEffect(() => {
    searchApi("korean");
  }, []);

  return [searchApi, results, error];
};
