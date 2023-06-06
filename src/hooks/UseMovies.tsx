import { MoviesContext } from "../context/MoviesContext";
import { useContext } from 'react';
import { IMovie } from "../types/IMovie";

interface criticsInterface {
    movies: IMovie[]
    setMovies: any
}

export const UseMovies = (): criticsInterface => {
    const { movies, setMovies }: criticsInterface = useContext(MoviesContext);

    return { movies, setMovies };
}

export const FindCriticMovies = (name: string) => {
    const { movies }: criticsInterface = useContext(MoviesContext);
    const criticMovies = movies.map(movie => {
        return (
            {
                "image": movie.image,
                "slug": movie.slug,
                "note": movie.assessments.find(person => person.name === name)
            }
        )
    })

    return criticMovies;
}