import React, { useContext, useRef } from 'react';
import userContext from '../store/UserContext';

const SearchBar = () => {
  const inputRef = useRef('');
  const { searchUser } = useContext(userContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredValue = inputRef.current.value;
    if (!enteredValue) {
      alert('please enter a name');
    } else {
      searchUser(enteredValue);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="search"
        name="search"
        className=" w-1/2 h-12 bg-slate-50 rounded-lg border border-black px-4"
        placeholder="search"
      />
      <button className="h-12 w-16 rounded-md mx-4 bg-black hover:bg-slate-600">
        Go
      </button>
    </form>
  );
};

export default SearchBar;
