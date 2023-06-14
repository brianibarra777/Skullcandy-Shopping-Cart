import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar.jsx'
import {Shop} from './pages/shop/shop.jsx'
import {Cart} from './pages/cart/cart.jsx'
import { ShopContextProvider } from './context/shopContext';


function App() {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route />
        </Routes>

      </Router>
       </ShopContextProvider>
    </div>
  );
}

export default App;
