function Search(props) {

  return (
    <div style={{ margin: 20 }}>
      <form>
        <label>
          <input type="text" name="name" onChange={props.search} />
        </label>
      </form>
    </div>
  );
}

export default Search;
