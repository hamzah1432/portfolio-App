import { useEffect, useState } from 'react';
import './App.css';
import About from './about';
import Gears from './gears';
import Home from './home';
import Project from './project';

function App() {

  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = (window.scrollY / 10);
      setRotation(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Gears rotation={rotation} />
      <Home rotation={rotation / 3} />
      <About rotation={rotation / 3} />
      <Project rotation={rotation} />
    </>
  );
}

export default App;
