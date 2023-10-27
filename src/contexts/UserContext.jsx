import { createContext, useState, useEffect } from 'react';
import { getUsers } from '../../utils/api';
export const UserContext = createContext();


const defaultUser = {
    username: "cooljmessy",
    name: "Peter Messy",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
};
  
  
export const UserProvider = ({ children }) => {
    const [allUsers, setAllUsers ] = useState([])
    const [user, setUser] = useState(defaultUser);
  
    useEffect(() => {
      getUsers()
      .then((users) => {
          setAllUsers(users);
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])
    return (
      <UserContext.Provider value={{ user, setUser, allUsers, setAllUsers }}>
        {children}
      </UserContext.Provider>
    );
};