import { useNavigate } from 'react-router-dom';
import styles from './Movies.module.css';

interface props{
    image: string
    slug?: string
    note: number
}

const Movies = ({ image, note, slug }: props) => {
    const navigate = useNavigate();
    
    return (
        <div
            className={styles.box}
            style={{ background: `url(${image})`, backgroundSize: 'cover' }}
            onClick={() => navigate(`${slug}`)}
        >
            <div>
                <h3>{note}</h3>
            </div>
        </div>
    )
}

export default Movies;