import { useParams } from "react-router-dom";
import { FindMovie } from "../../hooks/UseMovies";
import Header from "../../components/Header";
import styles from './PageFilmDefaultStyle.module.css';
import AboutMovie from "../../components/AboutMovie";

const PageFilmDefault = () => {
    const params = useParams().slug;
    const movie = FindMovie(params || '');

    if(movie){
        return (
            <div className={styles.content}>
                <Header />
                <div className={styles.box}>
                    <AboutMovie movie={movie}/>
                </div>
            </div>
        )
    } else{
        return(
            <div>oi</div>
        )
    }
}

export default PageFilmDefault;