import css from './SearchBox.module.css';

const SearchBox = ({ setSearchTerm }) => {
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={css.shearchStyle}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        type="text"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
