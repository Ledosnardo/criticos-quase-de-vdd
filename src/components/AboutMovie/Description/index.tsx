import { IMovie } from '../../../types/IMovie';
import SmallBox from '../../SmallBox';
import styles from './Description.module.css';
import { parseISO, format } from 'date-fns';

interface props{
    movie: IMovie
}

const Description = ({ movie }: props) => {
    const release = format(parseISO(movie.date), 'dd/MM/yyyy');

    return (
        <section className={styles.section_description}>
            <h1 className={styles.movie__name}>{movie.name}</h1>
            <div className={styles.description}>
                <div className={styles.producer}>
                    <h2>Produtores: </h2>
                    {movie.producer.map((produce, index) => <SmallBox key={index} text={produce} />)}
                </div>
                <div className={styles.date}>
                    <h2>Lançamento:</h2>
                    <h4><SmallBox text={release} /></h4>
                </div>
            </div>
        </section>
    )
}

export default Description;