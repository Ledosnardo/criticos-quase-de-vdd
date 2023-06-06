import criticsJson from '../db/critics.json';

const { createContext, useState } = require("react");


export const CriticsContext = createContext();
CriticsContext.displayName = 'Criticos';

export const CriticsProvider = ({ children }: any) => {
    const [ critics, setCritics ] = useState(criticsJson);

    return(
        <CriticsContext.Provider value={{ critics, setCritics }}>
            {children}
        </CriticsContext.Provider>
    )
}
