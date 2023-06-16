import styles from './SmallBoxStyles.module.css';

interface props{
    text: string
}

const SmallBox = ({ text }: props) => {
    return(
        <div className={styles.text}>{text}</div>
    )
}

export default SmallBox;