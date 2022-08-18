
import{BrowserRouter as Switch,Routes,Route}from 'react-router-dom';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import Create from './views/create';
import Home from './views/home';
import Notes from './views/notes';
function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar/>
        <Routes>
          <Route extact path='/' element={<Home/>}/>
          <Route exact path='/create'element={<Create/>}/>
          <Route exact path='/notes'element={<Notes/>}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
