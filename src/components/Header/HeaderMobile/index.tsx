import styles from './HeaderMobileStyles.module.css';
import links from '../../../db/headerLinks.json';
import { useState } from "react";
import { Link } from 'react-router-dom';

interface props{
    pathName: string
}

const HeaderMobile = ({ pathName }: props) => {
    const [ navOpen, setNavOpen ] = useState<boolean>(false);
    const toggleMode = () => {
        setNavOpen(!navOpen);
    }

    return(
        <div className={styles.navMobile}>
            <div className={styles.navIcon} onClick={toggleMode}>
                <div className={navOpen ? styles.menuHamburguerActive : styles.menuHamburguer}></div>
            </div>
            <div 
                className={!navOpen ? styles.linksMobileClose : styles.linksMobile}
                onClick={() => toggleMode()}
            >
                {links.map(link => {
                    return (
                        <Link key={link.id} to={`${link.url}`} 
                            style={{ textDecoration: 'none' }}
                        >
                            <h3 className={pathName === `${link.url}` ? styles.currentMobile : styles.defaultMobile}>
                                {link.name}
                            </h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HeaderMobile;