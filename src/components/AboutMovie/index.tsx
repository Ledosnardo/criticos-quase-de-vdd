import { IMovie } from "../../types/IMovie";
import styles from './AboutMovieStyles.module.css';
import Description from "./Description";
import Note from "./Note";

interface props{
    movie: IMovie
}

const AboutMovie = ({ movie }: props) => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={movie.image} alt={`Imagem do filme ${movie.name}`} />
            </div>
            <Description movie={movie} />
            <Note movie={movie} />
        </div>   
    )
}

export default AboutMovie;