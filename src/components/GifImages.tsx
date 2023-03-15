import useFetchGifs from "../hooks/useFetchGifs";

export const GifImages = ({ gifs }: any) => {

  const items = gifs?.map((gif: any) => (
    <div key={gif.id} className="gif" data-testid="test">
      <div className="gif-image">
        <img src={gif.url} alt={gif.title} />
      </div>
      <div className="gif-title">
        {gif.title}
      </div>
    </div>
  ));
  
  const loadingMsg = <p className="load-msg" data-testid="loader">Loading...</p>
  const content = (gifs?.length<1) ? loadingMsg : items
  return <div className="gifs-container">{content}</div>;
};
