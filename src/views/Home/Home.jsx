import './Home.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InternCard from '../../components/InternCard/InternCard';
import AddIntern from '../../assets/add.png';
import Logo from '../../assets/tcs-logo.png';
import Footer from '../../views/Footer/Footer';
import { Link, useLocation } from 'react-router-dom'; // 🆕

function App() {
  const [interns, setInterns] = useState([]);
  const location = useLocation(); // 🆕

  const loadInterns = async () => {
    console.log('Loading Interns Data....!');
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/interns`);
    setInterns(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    loadInterns();
  }, [location]); 

  return (
    <div>
      <h1 className='App-heading'>The Intern Lab</h1>

      <main className='container'>
        {interns.map((intern, i) => (
          <InternCard
            key={i}
            {...intern}
          />
        ))}

        {interns.length === 0 && (
          <h2 className='blank-data'>No Data found..!</h2>
        )}

        <Link to='/adduser'>
          <img src={AddIntern} className='add-intern' alt='Add Intern' />
        </Link>

        <img src={Logo} className='logo' alt='TCS Logo' />
      </main>

      <Footer />
    </div>
  );
}

export default App;
