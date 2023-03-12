import title from '../../img/title.png';
const Header = () => {
  return (
    <div>
      <img
        style={{
          display: 'block',
          margin: 'auto',
          maxWidth: '100%',
          objectFit: 'cover',
          height: 'auto',
          marginBottom: '16px',
          marginTop: '86px',
        }}
        src={title}
        alt='Rick&Morty'
      />
    </div>
  );
};
export default Header;
