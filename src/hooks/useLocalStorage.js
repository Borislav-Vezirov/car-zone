
import { useState } from "react";

export const useLocalStorage = (name, initialValue) => {

    const [state, setState] = useState(() => {

        //check if exists
        try {
            
            const item = localStorage.getItem(name);
    
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setUser = (value) => {
        try {
            
            localStorage.setItem(name, JSON.stringify(value));

            setState(value);

        } catch (error) {
            console.log(error);
        }
    }

    return [ state, setUser ];
}
