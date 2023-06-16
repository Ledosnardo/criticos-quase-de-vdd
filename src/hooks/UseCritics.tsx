import { useContext } from 'react';
import { ICritics } from '../types/ICritics';
import { CriticsContext } from '../context/CriticsContext';

interface criticsInterface {
    critics: ICritics[]
    setCritics: any
}

export const UseCritics = () => {
    const { critics, setCritics }: criticsInterface = useContext(CriticsContext);

    return { critics, setCritics };
}

export const FindImageCritic = (nameCritic: string): string => {
    const { critics }: criticsInterface = useContext(CriticsContext);
    const criticFind = critics.find(critic => critic.name === nameCritic);

    if(criticFind){
        return criticFind?.photo;
    }

    return '';
}