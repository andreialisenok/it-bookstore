import Search from './Search';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header className='flex justify-between'>
      <Search />
      <ToggleTheme />
    </header>
  );
};

export default Header;
