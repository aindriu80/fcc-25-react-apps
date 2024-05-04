import { useState } from 'react';
import './styles.css';

const LightDarkMode = () => {
  const [theme, setTheme] = useState('theme');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Dia duit an domhain</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    </>
  );
};

export default LightDarkMode;
