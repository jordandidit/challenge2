import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .userId.toString()
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===''){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className="white">
      
      <div className="black ma0 grow">
        <h2 className="f2">IMAGE SEARCH APP</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 white br3 grow b--none bg-black ma3"
          type = "search" 
          placeholder = "Get Album Photos By Id " 
          onChange = {handleChange}
        />
      </div>
      
      {searchList()}
    </section>
  );
}

export default Search;