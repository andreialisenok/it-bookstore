import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';

const ToggleTheme = () => {
  return (
    <button
      type='submit'
      className='flex item-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Sign in
      <CiDark />
      click
      <CiLight />
    </button>
  );
};

export default ToggleTheme;
