import { createContext, useState } from "react";
export const NumContext = createContext();
export const NumContextProvider =({ children }) => {
    const [num, setNum] = useState(0);
    const [msg, setMsg] = useState ("<maxi/>");
    return <NumContext.Provider value={{ num, setNum, msg,setMsg }}>{children}</NumContext.Provider>;
    
};