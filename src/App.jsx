import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';
import B2b from './pages/B2b';
import './styles/common.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Card from './pages/Card';
import RentToOwn from './pages/RentToOwn';
import Export from './pages/Export';

function App() {

  return (
    <>
     <div className="wrapper">
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/partnership' element={<B2b />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/export-import' element={<Export />}/>
            <Route path='/rent-to-own' element={<RentToOwn />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/terms' element={<Terms />}/>
            <Route path='/card' element={<Card />}/>
          </Routes>
        </main>
        <Footer />
      </Router>
     </div>
    </>
  )
}

export default App
