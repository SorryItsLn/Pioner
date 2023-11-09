
import Product from './components/product/Product';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="text mt-[32px] mx-[132px]">
      <Header className=""/>
       <Banner/>
       <About/>
       <Product/>
       <Hero/>
       </div>
  );
}

export default App;
