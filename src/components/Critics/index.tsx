import { useState } from 'react';
import styles from './Critics.module.css';
import { UseCritics } from '../../hooks/UseCritics';
import ModalTemplate from '../ModalTemplate';
import { ICritics } from '../../types/ICritics';

const Critics = () => {
    const { critics } = UseCritics();
    const [ modalOpen, setModalOpen ] = useState<boolean>(false);
    const [ criticModal, setCriticModal ] = useState<ICritics | undefined>()

    const openModal = ( critic: ICritics ) => {
        setCriticModal(critic);
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return(
        <section className={styles.section}>
                <div className={styles.content}>
                    <h1>Críticos</h1>
                    <ul>
                        {critics.map(critic => {
                            return(
                                <li key={critic.id}>
                                    <img 
                                        src={critic.photo} alt={`foto do ${critic.name}`}
                                        onClick={() => openModal(critic)}
                                    />
                                    <h3>{critic.nickname}</h3>
                                </li>
                            )
                        })}
                    </ul>
                    <ModalTemplate 
                        modalOpen={modalOpen} critic={criticModal} closeModal={closeModal}
                    />
                </div>
        </section>
    )
}

export default Critics;