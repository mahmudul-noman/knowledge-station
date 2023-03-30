import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App container">
      <Header></Header>
      <Home></Home>
    </div>
  )
}

export default App
