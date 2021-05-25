import PropTypes from 'prop-types';

const Header=({titulo})=>{
  return(
    <header>
      <h1 className='titulo'>{titulo}</h1>
      <nav className='nav-header'>
        <ul>
          <li>about</li>
          <li>journal</li>
        </ul>
      </nav>
    </header>
  )
}

Header.defaultProps={
  titulo:'header por defecto',
  numero: 1
}

Header.propTypes={
  titulo: PropTypes.string,
  numero: PropTypes.number
}

export default Header;

    

