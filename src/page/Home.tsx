import React from 'react';
import Header from '../components/Header';
import TextNavigationSlider from './Services';
import Contactsection from '../components/Contact';
import Teammember from '../components/Team';

const Home:React.FC = () => {
  return (
    <div>
      <Header />
      <Teammember />
      <TextNavigationSlider />
      <Contactsection />
    </div>
  );
};

export default Home;