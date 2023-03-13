import { GifImages } from "./GifImages";

export interface props {
  categories: string[];
}

export const GifGrid = ({ categories }: props) => {

  const categoryItems = categories.map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <GifImages category={category} />
        </div>
      ))

  const content = categories.length < 1
    ? <p>Add a category</p>
    : categoryItems
  
  return (
    <div data-testid="content">
      {content}
    </div>
  );
};
