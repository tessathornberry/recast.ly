const {useState} = React;

var Search = ({updatedFromSearch}) => {

  const [entry, setEntry] = useState('');

  const effectUpdate = ({event}) => {
    updatedFromSearch(event.target.value);
    setEntry(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control"
        type="text" placeholder="Put your search here..."
        value={entry}
        onChange={(event) => effectUpdate({event})} />
      <button className="btn hidden-sm-down" type="submit">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>

  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

