import Modal from 'react-modal';
import { ICritics } from '../../types/ICritics';
import styles from './ModalTemplateStyle.module.css';
import { IoIosExit } from 'react-icons/io'
import SocialMidias from '../SocialMidias';
import { FindCriticMovies } from '../../hooks/UseMovies';
import Movies from '../Movies';

interface props{
    modalOpen: boolean
    critic?: ICritics
    closeModal: () => void
}

const ModalTemplate = ({ modalOpen, critic, closeModal }: props) => {

    const moviesCritic = FindCriticMovies(critic?.name || '');

    return(
        <Modal isOpen={modalOpen} onRequestClose={closeModal} ariaHideApp={false}>
            <div className={styles.modal}>
                <IoIosExit 
                    size={40} onClick={() => closeModal()} cursor={'pointer'} 
                    className={styles.closeModal}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.perfil}>
                    <img src={critic?.photo} alt={`Foto do ${critic?.name}`} />
                    <h1>{critic?.name}</h1>
                </div>
                <div className={styles.description}>
                    <div className={styles.social_midia}>
                        <SocialMidias socialMidia={critic?.socialMidia!}/>
                    </div>
                    {critic?.description && <h3>{critic?.description}</h3>}
                    <div className={styles.movies}>
                        {moviesCritic.map((movie, index) => (
                            <Movies 
                                key={index}
                                image={movie.image} 
                                note={movie.note?.note!} 
                                slug={movie.slug}
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalTemplate;