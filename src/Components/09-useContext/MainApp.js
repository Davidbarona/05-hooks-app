import React, { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import { UserContext } from "./UserContext";

export const MainApp = () => {
    const [user, setUser] = useState({})
    
  return (
    <UserContext.Provider value={{
        user,
        setUser
    }} props>
      <AppRoutes />
    </UserContext.Provider>
  );
};
