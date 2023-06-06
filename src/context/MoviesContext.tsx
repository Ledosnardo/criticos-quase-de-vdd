import moviesJson from '../db/movies.json';

const { createContext, useState } = require("react");

export const MoviesContext = createContext();
MoviesContext.displayName = "Filmes";

export const MoviesProvider = ({ children }: any) => {
    const [ movies, setMovies ] = useState(moviesJson);

    return(
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}