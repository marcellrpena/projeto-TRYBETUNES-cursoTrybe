import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../css/Profile.css';

function Profile() {
  const [localData, setLocalData] = useState({});
  const loadData = () => {
    setLocalData(JSON.parse(localStorage.getItem('user')));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div data-testid="page-profile" className="body-profile">
      <Header />
      {
        Object.keys(localData).length === 0 ? <h1>Loading...</h1> : (
          <main className="main-profile">
            <div>
              <img
                className="img-profile"
                src={ localData.image }
                alt="profile-photography"
              />
            </div>

            <div className="personal-info">
              <div className="align">
                <h1>Nome: </h1>
                <h1 className="name-info">{ localData.name }</h1>
              </div>
              <div className="align">
                <h1>Email: </h1>
                <h1 className="email-info">{ localData.email }</h1>
              </div>
              <div className="align">
                <h1>Descrição: </h1>
                <p className="description-info">{ localData.description }</p>
              </div>
            </div>
          </main>
        )
      }
    </div>
  );
}

export default Profile;
