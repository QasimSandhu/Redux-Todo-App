import React, { createContext, useState } from 'react';

// export const DeleteContext = createContext("");
export const DeleteContext = createContext({ delalert: false, setDelAlert: () => {} });

const ContextProvider = ({ children }) => {
    const [delalert, setDelAlert] = useState(false);

    return (
        <>
            <DeleteContext.Provider value={{ delalert, setDelAlert }}>
                {children}
            </DeleteContext.Provider>
        </>
    );
}

export default ContextProvider;
