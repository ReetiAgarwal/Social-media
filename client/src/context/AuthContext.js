import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : {
        _id : "658fe855633ab8e86278715f",
        username : "Geeta",
        email : "kjr@gmail.com",
        password : "$2b$10$jZTdIFhwv3M4xKZdRzqQLOR8Igv6x9QbObrah9KhIAMG6tZIcv5LK",
        profilePicture : "/images/geeta.jpg",
        coverPicture : "",
        followers : [],
        followings : ["658eb8195344b2cff10ad424"],
        isAdmin : false,
        createdAt : {"$date":{"$numberLong":"1703929941596"}},
        updatedAt : {"$date":{"$numberLong":"1704355803860"}},
        city : "Noida",
        desc : "Hello Everyone!",
        from : "Sector-62",
        relationship : "Single"
    },
    // user : null,
    isFetching : false,
    error : false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider 
        value = {{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
