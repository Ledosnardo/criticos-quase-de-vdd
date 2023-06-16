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

export const FindMovie = (slug: string) => {
    const { movies }: criticsInterface = useContext(MoviesContext);
    const movie = movies.find(movie => movie.slug === slug)

    return movie;
}

export const FindCriticMovies = (name: string) => {
    const { movies }: criticsInterface = useContext(MoviesContext);
    
    const criticMovies = movies.map(movie => {
        const test = movie.assessments.find(critic => critic.name === name);
        if(test){
            return movie
        }
        return
    })

    const ArrayMovies = criticMovies.map(movie => (
        {
            "image": movie?.image,
            "slug": movie?.slug,
            "critic": movie?.assessments.find(critic => critic.name === name)
        }
    ))

    return ArrayMovies;
}