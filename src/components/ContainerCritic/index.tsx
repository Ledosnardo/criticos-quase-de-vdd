import { UseColorNote } from "../../hooks/UseColorNote";
import { FindImageCritic } from "../../hooks/UseCritics"
import SmallBox from "../SmallBox";
import styles from './ContainerCriticStyles.module.css';

interface props{
    critic: {
        name: string
        note: number
    }
}

const ContainerCritic = ({ critic }: props) => {
    const imageCritic = FindImageCritic(critic.name);    
    const color = UseColorNote(critic.note);

    return(
        <div className={styles.critic}>
            <img src={imageCritic} alt={`Imagem do ${critic.name}`} />
            <h3><SmallBox text={critic.name}/></h3>
            <h4 style={{backgroundColor: `${color}`, boxShadow: `0 0 5px 2px ${color}` }}>{critic.note}</h4>
        </div>
    )
}

export default ContainerCritic;