import { useEffect, useState } from "react";
import fetchGifs from "../services/fetchGifs";

const useFetchGifs = (category: string) => {
  const [gifs, setGifs]: any[] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchGifs(category, 12)
      .then(setGifs)
      .then(() => setLoading(false));
  }, []);

  return {
    gifs,
    isLoading,
  };
};

export default useFetchGifs;
