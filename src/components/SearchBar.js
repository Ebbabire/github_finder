import React, { useContext, useState } from 'react';
import userContext from '../store/UserContext';
import Alert from './Alert';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(null);

  const { clearUsersList, searchUser, users } = useContext(userContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input === '') {
      setInputError(true);
      clearUsersList();
      setTimeout(() => {
        setInputError(false);
      }, 3000);
    } else {
      searchUser(input);
    }
    setInput('');
  };

  return (
    <>
      {inputError && <Alert msg={'please enter a name'} />}
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="search"
          name="search"
          className=" w-8/12 h-12 bg-slate-50 rounded-lg border text-black text-lg border-black px-4"
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
            onClick={clearUsersList}
          >
            clear
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
