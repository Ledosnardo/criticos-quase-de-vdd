import styles from './SocialMidiasStyle.module.css';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ISocialMidias } from '../../types/ISocialMidia';

interface props{
    socialMidia: ISocialMidias
}

const SocialMidias = ({ socialMidia }: props) => {
    const arraySocialMidia = [socialMidia];

    return (
        <>
            {arraySocialMidia.length > 0 && arraySocialMidia.map((midia, index) => {
                return(
                    <div key={index}>
                        {midia.github && (
                            <Link to={midia.github || ''} className={styles.link} target='_blank'>
                                <AiFillGithub size={50}/>
                            </Link>
                        )}
                        {midia.instagram && (
                            <Link to={midia.instagram || ''} className={styles.link} target='_blank'>
                                <AiOutlineInstagram size={50}/>
                            </Link>
                        )}
                        {midia.linkedin && (
                            <Link to={midia.linkedin || ''} className={styles.link} target='_blank'>
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