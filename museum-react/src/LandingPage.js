import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [preferences, setPreferences] = useState({
    location: '',
    theme: '',
    artist: '',
    guideRating: '',
  });

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isLoginField = ['username', 'password'].includes(name);

    if (isLoginField) {
      setLoginInfo((prevLoginInfo) => ({
        ...prevLoginInfo,
        [name]: value,
      }));
    } else {
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        [name]: value,
      }));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with preferences:', preferences);
    // Ready for Tom's magic!
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginInfo);
    // Login Logic Goes 'Ere
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Museum Catalogue and Guide</h1>
      <p className="subheading italic">From Renaissance to Reggae, we've got it all!</p>
      <p className="instructions">
        If you know what you are after, you can go straight to our indices. Alternatively, you can search by location, theme, artist, or our very special Snob's Guide Rating™.
      </p>
      
      <div className="content">
        <div className="links">
          <Link to="/museums" className="link museums">Museums</Link>
          <Link to="/artists" className="link artists">Artists</Link>
          <Link to="/guides" className="link guides">Guides</Link>
          <Link to="/paintings" className="link paintings">Paintings</Link>
          <Link to="/sculptures" className="link sculptures">Sculptures</Link>
        </div>
        
        <div className="search-boxes">
          <input type="text" name="location" placeholder="Location" value={preferences.location} onChange={handleChange} />
          <input type="text" name="theme" placeholder="Theme" value={preferences.theme} onChange={handleChange} />
          <input type="text" name="artist" placeholder="Artist" value={preferences.artist} onChange={handleChange} />
          <input type="text" name="guideRating" placeholder="Guide Rating" value={preferences.guideRating} onChange={handleChange} />
          <button type="submit" onClick={handleSearch}>Search</button>


          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username" value={loginInfo.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleChange} />
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
      </div>
      
      <div className="admin-access">
        <Link to="/admin">Administrator Access</Link>
      </div>
    </div>
  );
};

export default LandingPage;
