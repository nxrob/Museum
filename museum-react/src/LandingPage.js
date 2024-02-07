import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isLoginField = ['username', 'password'].includes(name);

    if (isLoginField) {
      setLoginInfo(prevLoginInfo => ({
        ...prevLoginInfo,
        [name]: value,
      }));
    } else {
      setPreferences(prevPreferences => ({
        ...prevPreferences,
        [name]: value,
      }));
    }
    const handleLogin = (e) => {
      e.preventDefault();
      if (loginInfo.username === adminCredentials.username && loginInfo.password === adminCredentials.password) {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setCurrentUser(loginInfo.username);
        console.log('Logged in as admin:', loginInfo.username);
      } else if (loginInfo.username && loginInfo.password) {
        setIsLoggedIn(true);
        setIsAdmin(false); 
        setCurrentUser(loginInfo.username);
        console.log('Logged in with:', loginInfo);
      } else {
        console.log('Login failed: Username or password is missing');
      }
    };
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const adminCredentials = [
    { username: 'Administrator', password: 'AllHailTheNewFlesh' },
    { username: 'Apprentice', password: 'LearningOnTheJob' },
  ];
  
  const handleLogin = (e) => {
    e.preventDefault();
    const isAdminUser = adminCredentials.some(cred => cred.username === loginInfo.username && cred.password === loginInfo.password);
  
    if (isAdminUser) {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setCurrentUser(loginInfo.username);
      console.log('Logged in as admin:', loginInfo.username);
    } else if (loginInfo.username && loginInfo.password) {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setCurrentUser(loginInfo.username);
      console.log('Logged in with:', loginInfo);
    } else {
      console.log('Login failed: Username or password is missing');
    }
  };
  
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); 
    setCurrentUser(''); 
    setLoginInfo({ username: '', password: '' });
    console.log('Logged out');
  };
 
  

  return (
    <div className="landing-page">
      {isLoggedIn && (
        <div className="login-status">
          <p>Logged in as: {currentUser} {isAdmin && "(Admin)"}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
  
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
          <h2>Search</h2>
          <input type="text" name="location" placeholder="Location" value={preferences.location} onChange={handleChange} />
          <input type="text" name="theme" placeholder="Theme" value={preferences.theme} onChange={handleChange} />
          <input type="text" name="artist" placeholder="Artist" value={preferences.artist} onChange={handleChange} />
          <input type="text" name="guideRating" placeholder="Guide Rating" value={preferences.guideRating} onChange={handleChange} />
          <button type="submit">Search</button>
        </div>
      </div>
      
      {!isLoggedIn && (
        <div className="login-form">
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username" value={loginInfo.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleChange} />
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
      )}
  
  {
  isLoggedIn && isAdmin && (
    <div className="admin-access">
      <Link to="/admin">Administrator Access</Link>
    </div>
  )
}

      
{isAdmin && (
  <div className="admin-section">
    <div className="admin-actions">
      <h2>Administrator Actions</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Administrator Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/admin/data-analysis">Data Analysis</Link></td>
          </tr>
          <tr>
            <td><Link to="/admin/trend-identifier">Trend Identifier</Link></td>
          </tr>
          <tr>
            <td><Link to="/admin/hacking-attempts">Hacking Attempts</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}



    </div>
  );
  
};

export default LandingPage;