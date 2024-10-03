import React from 'react';
import Header from '../components/Header';
import TextNavigationSlider from './Services';
import Contactsection from '../components/Contact';

const Home:React.FC = () => {
  return (
    <div>
      <Header />
      <TextNavigationSlider />
      <Contactsection />
    </div>
  );
};

export default Home;