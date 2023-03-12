import { GifImages } from "./GifImages";

export interface props {
  categories: string[];
}

export const GifGrid = ({ categories }: props) => {
  return (
    <div>
      {...categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <GifImages category={category} />
        </div>
      ))}
    </div>
  );
};
