import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/ActionCreators';
const Search = () => {
  // const [search, setSearch] = useState();
  const [title, setTitle] = useState('');
  // console.log(title);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      const book = {
        title,
      };
      console.log(book);
      dispatch(addBook(book));

      setTitle('');
    }
  };
  return (
    <div>
      <CiSearch />
      <input type='text' value='' onChange={handleSearch} />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
