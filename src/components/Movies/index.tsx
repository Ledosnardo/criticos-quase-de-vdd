import { useNavigate } from 'react-router-dom';
import styles from './Movies.module.css';
import { UseColorNote } from '../../hooks/UseColorNote';

interface props{
    image: string | undefined
    slug?: string | undefined
    note: number | undefined
}

const Movies = ({ image, note, slug }: props) => {
    const navigate = useNavigate();
    const cor = UseColorNote(note!);
    
    if(slug !== undefined){
        return (
            <div
                className={styles.box}
                style={{ background: `url(${image})`, backgroundSize: 'cover' }}
                onClick={() => navigate(`/filmes/${slug}`)}
            >
                <div>
                    <h3 style={{ backgroundColor: `${cor}` }}>{note}</h3>
                </div>
            </div>
        )
    } else{
        return(
            <div></div>
        )
    }
}

export default Movies;