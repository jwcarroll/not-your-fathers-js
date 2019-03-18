const React = require('react');
import preloader from "spectacle/lib/utils/preloader";

const swapiServer = "http://localhost:4000";

const images = {
  loader: require("../assets/hourglass.svg")
}

preloader(images);

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap:'wrap'
};

const itemStyle = {
  margin:'5px',
  width: '200px'
};

export default function SearchResults(props){
    const {
      searching = false, 
      characters = [],
      vehicles = [],
      starships = []
    } = props;

    if(searching){
      return (
        <div style={containerStyle}>
          <img style={itemStyle} src={images.loader} />
        </div>
      );
    }

    return (
      <div style={{textAlign:'center'}}>
        <ResultsBlock title="Characters" items={characters} />
        <ResultsBlock title="Vehicles" items={vehicles} />
        <ResultsBlock title="Starships" items={starships} />
      </div>
    );
}

function ResultsBlock(props){
  const {title, items = []} = props;

  if(!items.length){
    return <span />;
  }

  return (
    <div>
      <h1>{title}</h1>
      <div style={containerStyle}>
        { items.map(c => <Result key={c.id} item={c} />) }
      </div>
    </div>
  );
}

function Result(props){
    const {item} = props;

    return (
    <div className="thumbnail" style={itemStyle}>
      <img src={`${swapiServer}/${encodeURIComponent(item.image)}`} alt={item.name} />
      <div className="caption">
        <h3>{item.name}</h3>
      </div>
    </div>
    );
}
