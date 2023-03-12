import { state } from "../types";

const fetchGifs = async (topic: string, amount: number) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=aqoM4Ud0RNXZxRsTotulXkOo0sz5Lob2&q=${topic}&limit=${amount}`
  );

  const { data } = await res.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height_small.url,
    };
  });

  return gifs;
};

export default fetchGifs;
