
import{BrowserRouter as Switch,Routes,Route}from 'react-router-dom';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar/>
        <Routes>
          <Route extact path='/' element={<Home/>}/>

          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
