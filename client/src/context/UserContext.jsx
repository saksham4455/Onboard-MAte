import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);

  return (
    <UserContext.Provider value={{ role, setRole, employeeId, setEmployeeId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
