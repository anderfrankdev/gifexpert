import useFetchGifs from "../hooks/useFetchGifs";

export const GifImages = ({ category }: any) => {
  const { gifs, isLoading } = useFetchGifs(category);

  const items = gifs.map((gif: any) => (
    <div key={gif.id} className="gif">
      <div className="gif-image">
        <img src={gif.url} alt={gif.title} />
      </div>
      <div className="gif-title">
        {gif.title}
      </div>
    </div>
  ));
  
  const loadingMsg = isLoading && <p className="load-msg">Loading...</p>

  return <div className="gifs-container">{loadingMsg}{...items}</div>;
};
