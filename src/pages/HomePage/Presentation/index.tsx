import styles from './Presentation.module.css';

const Presentation = () => {

    return(
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>Críticos quase <br/> de verdade</h1>
                <h3>
                    Um site feito por amigos para darmos nossa opnião 
                    <br/> quase de críticos, ou talvez não...
                </h3>
            </div>
        </section>
    )
}

export default Presentation;