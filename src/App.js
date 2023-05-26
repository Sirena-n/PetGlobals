import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Homepage from './Pages/HomePage/Homepage';
import Catalog from './Pages/CatalogPage/Catalog';
import Contact from './Pages/ContactsPage/Contact';
import OneCatalogProducts from './Pages/OneCatalogProduct/OneCatalogProducts';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Homepage />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='catalog/:id' element={<OneCatalogProducts />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
