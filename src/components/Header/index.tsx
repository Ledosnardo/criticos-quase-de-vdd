import { Link, useLocation } from "react-router-dom"
import styles from './Header.module.css';
import logo from './logo.png';
import links from '../../db/headerLinks.json';

const Header = () => {
    const pathName = useLocation().pathname;

    return(
        <header className={styles.header}>
            <figure>
                <img src={logo}/>
            </figure>
            <div className={styles.links}>
                {links.map(link => {
                    return(
                        <Link key={link.id} to={`${link.url}`} style={{ textDecoration: 'none' }}>
                            <h3 className={pathName === `${link.url}` ? styles.current : styles.default}>
                                {link.name}
                            </h3>
                        </Link>
                    )
                })}
            </div>
        </header>
    )
}

export default Header