import React from 'react';
import './Header.scss';
import { router } from '@routes/index';

const Header = () => {
  console.log('Render Header');
  const navigate = router.navigate;
  return (
    <header>
      Header
      <nav className="mobile_nav">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </nav>
    </header>
  );
};

export default React.memo(Header);
