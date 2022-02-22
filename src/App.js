import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/bottomNav/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container} from '@mui/material';
import Trending from './components/pages/Trending/Trending';
import Movies from './components/pages/Movies/Movies';
import Search from './components/pages/Search/Search';
import Series from './components/pages/Seires/Series';
 


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route path = '/' element = {<Trending/>} exact/>
            <Route path = '/movies' element = {<Movies/>}/>
            <Route path = '/series' element = {<Series/>}/>
            <Route path = '/search' element = {<Search/>}/>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
