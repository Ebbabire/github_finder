import React, { useContext, useRef } from 'react';
import userContext from '../store/UserContext';

const SearchBar = () => {
  const inputRef = useRef('');
  const { clearUser, searchUser, users } = useContext(userContext);

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
    <>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type="search"
          name="search"
          className=" w-8/12 h-12 bg-slate-50 rounded-lg border border-black px-4"
          placeholder="search"
        />
        <button
          type="submit"
          className="h-12 w-16 rounded-md mx-4 bg-black hover:bg-slate-600"
        >
          Go
        </button>
      </form>
      {users.length > 0 && (
        <div className=" mt-4 mb-4">
          <button
            type="submit"
            className="w-12 justify-center flex items-center rounded-md mx-4 bg-black hover:bg-slate-600"
            onClick={clearUser}
          >
            clear
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
