import React, { useState, useEffect } from 'react';
import '../../../assets/style.css';
import userManager from '../../../account/config';
import Header from './Header';

const HomePage = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function getUser() {
      const user = await userManager.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <div className='homepage'>
      <Header user={user}/>
      
    </div>
  );
};

export default HomePage;
