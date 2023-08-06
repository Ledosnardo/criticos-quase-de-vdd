import { UseColorNote } from "../../../hooks/UseColorNote";
import { IMovie } from "../../../types/IMovie";
import ContainerCritic from "../../ContainerCritic";
import styles from './Note.module.css';

interface props{
    movie: IMovie
}

const Note = ({ movie }: props) => {
    const color = UseColorNote(movie.note);

    return(
        <section className={styles.section_note}>
            <div className={styles.note}
                style={{ backgroundColor: `${color}`, boxShadow: `0 0 5px 2px ${color}` }}
            >
                <h1>{movie.note}</h1>
            </div>
            <div className={styles.critic}>
                <div className={styles.avaliation}>
                    <div>
                        <h3 className={styles.text}>{movie.avaliation}</h3>
                    </div>
                </div>
                <div className={styles.criticsContainer}>
                    {movie.assessments.map((critic, index) => (
                        <ContainerCritic critic={critic} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Note;