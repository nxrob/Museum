import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from './ImageGallery';

const LandingPage = () => {
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [preferences, setPreferences] = useState({
    location: '',
    theme: '',
    artist: '',
    guideRating: '9',
  });
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();
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
    {username: 'a', password: 'b'},
  ];
  
  const handleSearch = async () => {
    setIsSearching(true);
    console.log('Current search preferences:', preferences); 
  
    const allSearches = JSON.parse(localStorage.getItem('allSearches')) || [];
    allSearches.push(preferences);
    localStorage.setItem('allSearches', JSON.stringify(allSearches));
  
    try {
      console.log('Guide Rating:', preferences.guideRating); 
      if (preferences.artist === 'El Greco') {
        navigate('/artists/El%20Greco');
      } else if (preferences.artist === 'Picasso') {
        navigate('/artists/Pablo%20Picasso');
      } else if (preferences.guideRating === '9') {
        console.log('Redirecting to Hermitage Museum'); 
        navigate('/museums/Hermitage%20Museum');
      } else {
        const response = await fetch('http://localhost:8080/museum');
        let museums = await response.json();
        const queryParams = new URLSearchParams(preferences).toString();
        const fetchURL = `http://localhost:8080/museum?${queryParams}`;
        const generalResponse = await fetch(fetchURL);
        if (!generalResponse.ok) {
          throw new Error(`HTTP error! status: ${generalResponse.status}`);
        }
        const generalData = await generalResponse.json();
        setResults(generalData);
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };
  
  
  
  
  

  const handleLogin = (e) => {
    e.preventDefault();
    const isAdminUser = adminCredentials.some(cred => cred.username === loginInfo.username && cred.password === loginInfo.password);
  
    if (isAdminUser) {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setCurrentUser(loginInfo.username);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('currentUser', loginInfo.username);
      console.log('Logged in as admin:', loginInfo.username);
    } else if (loginInfo.username && loginInfo.password) {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setCurrentUser(loginInfo.username);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('currentUser', loginInfo.username);
      console.log('Logged in with:', loginInfo);
    } else {
      console.log('Login failed: Username or password is missing');
    }
  };
  

  const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('currentUser');
  
  setIsLoggedIn(false);
  setIsAdmin(false);
  setCurrentUser('');
  console.log('Logged out');
  setLoginInfo({ username: '', password: '' });
};
useEffect(() => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
  const storedCurrentUser = localStorage.getItem('currentUser');

  if (storedIsLoggedIn) {
    setIsLoggedIn(storedIsLoggedIn);
    setIsAdmin(storedIsAdmin);
    setCurrentUser(storedCurrentUser);
  }
}, []);
 
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
          <button onClick={handleSearch}>Search</button>
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

<ImageGallery/>
    </div>
  );
  
};

export default LandingPage;