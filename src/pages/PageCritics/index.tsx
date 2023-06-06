import Critics from "../../components/Critics";
import Header from "../../components/Header"
import styles from './PageCritics.module.css';

const PageCritics = () => {
    return(
        <main className={styles.main}>
            <Header />
            <Critics />
        </main>
    )
}

export default PageCritics;