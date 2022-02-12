import logo from './logo.svg';
import './App.css';
import Intro from './components/introduction/Intro';
import ProductList from './components/productList/ProductList';
import Products from './components/products/Products';
import Contact from './contact/Contact';
import Name from './components/name/Name';
import Body from './components/body/Body';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Timeline from './components/timeline/Timeline';
import Placeholder from './components/placeholder/Placeholder';

function App() {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, [])

  return (
      <div>
        <Name/>
        <Body/>
        <Timeline/>
        <Placeholder/>
      </div>
  );
}

export default App;
