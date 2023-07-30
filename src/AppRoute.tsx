import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageCritics from './pages/PageCritics';
import { CriticsProvider } from './context/CriticsContext';
import PageFilms from './pages/PageFilms';
import { MoviesProvider } from './context/MoviesContext';
import PageFilmDefault from './pages/PageFilmDefault';
import PageDefault from './pages/PageDefault';

function AppRoute() {
  return (
    <BrowserRouter>
      <CriticsProvider>
        <MoviesProvider>

          <Routes>
            <Route path= '/' element={<PageDefault />}>
              <Route index element={<HomePage />}/>
              <Route path='/criticos' element={<PageCritics />}/>
              <Route path='/filmes' element={<PageFilms />}/>
              <Route path='/filmes/:slug' element={<PageFilmDefault />} />
            </Route>
          </Routes>
          
        </MoviesProvider>
      </CriticsProvider>
    </BrowserRouter>
  );
}

export default AppRoute;
