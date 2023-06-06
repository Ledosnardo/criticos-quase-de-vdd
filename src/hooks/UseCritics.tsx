import { useContext } from 'react';
import { ICritics } from '../types/ICritics';
import { CriticsContext } from '../context/CriticsContext';

interface criticsInterface {
    critics: ICritics[]
    setCritics: any
}

export const UseCritics = () => {
    const { critics, setCritics }: criticsInterface = useContext(CriticsContext);

    return { critics, setCritics};
}