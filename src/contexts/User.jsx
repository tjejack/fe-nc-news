import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        username: 'anonymous',
        name: 'Anon',
        avatar_url:
          'https://t4.ftcdn.net/jpg/01/06/72/79/360_F_106727924_lb4hNMxPuj3FQdWKO53aZ4f6YYOjjCSK.jpg'
      })
    return(
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}