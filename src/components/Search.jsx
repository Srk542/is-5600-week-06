import React from 'react';

export default function Search({ handleSearch }) {
  // This is a controlled component, so we need to keep track of the search term in state
  const [search, setSearch] = React.useState('');

  // This function will be called whenever the user types in the search box
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // This function will be called when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search.toLowerCase());
  };

  return (
    <form className="pt4 pb4 pl2 black-80" onSubmit={handleSubmit}>
      <fieldset className="cf bn ma0 pa0">
        <div className="cf measure mb2">
          <input
            className="f6 f5-l input-reset fl black-80 ba b--black-20 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            placeholder="Tag Search"
            value={search}
            onChange={handleChange}
            type="text"
            aria-label="Search tags"
          />
          <input
            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
            type="submit"
            value="Search"
            aria-label="Submit search"
          />
        </div>
        <small id="name-desc" className="f6 black-60 db mb2">
          Enter a keyword to filter by tags
        </small>
      </fieldset>
    </form>
  );
}
