import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [preferences, setPreferences] = useState({
    location: '',
    theme: '',
    artist: '',
    guideRating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with preferences:', preferences);
    //Ready for Tom's magic!
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Museum Catalogue and Guide</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={preferences.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="theme"
          placeholder="Theme"
          value={preferences.theme}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={preferences.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="guideRating"
          placeholder="Guide Rating"
          value={preferences.guideRating}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
      <Link to="/museums">Museums </Link>
    <Link to="/artists">Artists </Link>
    <Link to="/guides">Guides </Link>
  </div>
  <div className="admin-access-link">
    <Link to="/admin">Administrator Access</Link>
  </div>
</div>
  );
};

export default LandingPage;