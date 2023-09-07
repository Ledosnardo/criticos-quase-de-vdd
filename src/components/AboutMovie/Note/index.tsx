import { useEffect, useState } from "react";
import { UseColorNote } from "../../../hooks/UseColorNote";
import { IMovie } from "../../../types/IMovie";
import ContainerCritic from "../../ContainerCritic";
import styles from './Note.module.css';

interface props{
    movie: IMovie
}

interface critic {
    name: string
    note: number
}


const Note = ({ movie }: props) => {
    const color = UseColorNote(movie.note);
    const  numberSort = Math.floor(Math.random() * movie.assessments.length - 1)
    const [ chosen, setChosen ] = useState<critic>(movie.assessments[numberSort]);
    

    return(
        <section className={styles.section_note}>
            <div className={styles.note}
                style={{ backgroundColor: `${color}`, boxShadow: `0 0 5px 2px ${color}` }}
            >
                <h1>{movie.note}</h1>
            </div>
            <div className={styles.critic}>
                <div className={styles.avaliation}>
                    <ContainerCritic critic={chosen} />
                    <div className={styles.avaliation__text}>
                        <h3 className={styles.text}>{movie.avaliation}</h3>
                    </div>
                </div>
                <div className={styles.criticsContainer}>
                    {movie.assessments.map((critic, index) => {
                        if(critic.name == chosen.name){
                            return '';
                        } 
                        return (
                            <div onClick={() => setChosen(movie.assessments[index])}>
                                <ContainerCritic critic={critic} key={index}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Note;