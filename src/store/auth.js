import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUSer] = useState("");
    const authorizationToken = `Bearer ${token}`;

  const storeTokeninLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);

  };

  let isLoggedIn = !!token;

//   tackling the logout functionality

const LogoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token")
}



// JWT AUTHENTICATION - TO  GET the currently user login data
 
const userAuthentication=async ()=>{
  try {
    const response = await fetch("http://localhost:5000/api/auth/user",{
      method:"GET",
      headers:{
        Authorization : authorizationToken
      }
    })
    if(response.ok)
    {
      const data = await response.json();
      setUSer(data.userData);
    }
    
  } catch (error) {
    
    console.log("Error fetching user side ")
  }
}


  useEffect(()=>{
    userAuthentication()
  },[])

  return (
    <AuthContext.Provider value={{isLoggedIn, storeTokeninLS,LogoutUser,authorizationToken,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue)
    throw new Error("useAuth used outside of the provider");

    return authContextValue;
}
