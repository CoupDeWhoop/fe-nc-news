import { createContext, useState } from 'react';

export const UserContext = createContext();


const defaultUser = {
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
};
  
  
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
};