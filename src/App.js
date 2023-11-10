
import Product from './components/product/Product';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
  return (
    <section>
      <div className="text mt-[32px] mx-[132px]">
        <Header className="" />
        <Banner />
        <About />
        <Product />
        <Hero />
        <News />
      </div>
      <Footer />
    </section>
  );
}

export default App;
