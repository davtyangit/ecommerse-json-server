import { Categories } from './components/categories/Categories'
import { Header } from './components/header/Header'
import { Products } from './components/products/Products'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <div>
      <ToastContainer autoClose={300} />
      <Header />
      <div className='container'>
        <Categories />
        <Products />
      </div>
    </div>
  )
}

export default App
