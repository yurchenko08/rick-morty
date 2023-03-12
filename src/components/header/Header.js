import title from '../../img/title.png';
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='header-image' src={title} alt='Rick&Morty' />
    </div>
  );
};

export default Header;
