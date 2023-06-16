import { format, parseISO } from "date-fns";
import { IMovie } from "../../types/IMovie";
import SmallBox from "../SmallBox";
import styles from './AboutMovieStyles.module.css';
import ContainerCritic from "../ContainerCritic";
import { UseColorNote } from "../../hooks/UseColorNote";

interface props{
    movie: IMovie
}

const AboutMovie = ({ movie }: props) => {

    const release = format(parseISO(movie.date), 'dd/MM/yyyy');
    const color = UseColorNote(movie.note);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={movie.image} alt={`Imagem do filme ${movie.name}`} /> 
            </div>    
            <div className={styles.movie}>
                <h1 className={styles.movie__name}>{movie.name}</h1> 
                <div className={styles.description}>
                    <div className={styles.producer}>
                        <h2>Produtores: </h2>  
                        {movie.producer.map((produce, index) => <SmallBox key={index} text={produce}/>)}  
                    </div>
                    <div className={styles.date}>
                        <h2>Data de Lançamento:</h2>
                        <h4><SmallBox text={release}/></h4>
                    </div>
                </div>
                <div className={styles.note} 
                    style={{ backgroundColor: `${color}`, boxShadow: `0 0 5px 2px ${color}` }}
                >
                    <h1>{movie.note}</h1>    
                </div>
                <div className={styles.critic}>
                    <h3>sla, to testando msm, é isso</h3>
                    <div className={styles.criticsContainer}>
                        {movie.assessments.map((critic, index) => (
                            <ContainerCritic critic={critic} key={index}/>
                        ))}
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default AboutMovie;