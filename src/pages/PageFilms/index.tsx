import Header from "../../components/Header"
import Movies from "../../components/Movies";
import styles from './PageFilmsStyle.module.css';
import { UseMovies } from "../../hooks/UseMovies";

const PageFilms = () => {

    const { movies } = UseMovies();

    return(
        <>
            <div className={styles.header}>
                <Header />
                <h1>Filmes</h1>
            </div>
            <section className={styles.section}>
                {movies.map(movie => {
                    return(
                        <div className={styles.movie} key={movie.id}>
                            <Movies image={movie.image} note={movie.note} slug={movie.slug}/>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default PageFilms;