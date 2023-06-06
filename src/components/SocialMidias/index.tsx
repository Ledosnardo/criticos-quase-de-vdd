import styles from './SocialMidiasStyle.module.css';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

interface props{
    socialMidia: {
        instagram?: string | undefined;
        linkedin?: string | undefined;
        github?: string | undefined;
    }
}

const SocialMidias = ({ socialMidia }: props) => {
    const arraySocialMidia = [socialMidia];
    const navigate = useNavigate();

    return (
        <>
            {arraySocialMidia.length > 0 && arraySocialMidia.map((midia, index) => {
                return(
                    <div key={index}>
                        {midia.github && (
                            <Link to={midia.github || ''} className={styles.link}>
                                <AiFillGithub size={50}/>
                            </Link>
                        )}
                        {midia.instagram && (
                            <Link to={midia.instagram || ''} className={styles.link}>
                                <AiOutlineInstagram size={50}/>
                            </Link>
                        )}
                        {midia.linkedin && (
                            <Link to={midia.linkedin || ''} className={styles.link}>
                                <AiFillLinkedin size={50}/>
                            </Link>
                        )}
                    </div>
                )
            })}
        </>
    )
}

export default SocialMidias;