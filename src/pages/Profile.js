import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function Profile() {
  const [localData, setLocalData] = useState({});
  const loadData = () => {
    setLocalData(JSON.parse(localStorage.getItem('user')));
  };

  useEffect(() => {
    loadData();
  });

  return (
    <div data-testid="page-profile">
      <Header />
      {
        Object.keys(localData).length === 0 ? <h1>Loading...</h1> : (
          <main>
            <img src={ localData.image } alt="profile-photography" />
            <h1>{ localData.name }</h1>
            <h1>{ localData.email }</h1>
            <p>{ localData.description }</p>
          </main>
        )
      }
    </div>
  );
}

export default Profile;
