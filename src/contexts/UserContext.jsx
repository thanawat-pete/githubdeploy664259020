import { createContext, useContext } from "react";

// 1. Create Context
const UserContext = createContext(null);

// 2. Custom Hook for easy access
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
};

export default UserContext;
