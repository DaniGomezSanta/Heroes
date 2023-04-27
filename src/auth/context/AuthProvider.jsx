import { useReducer } from "react";
import { Authcontext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
    logged: false
}


export const AuthProvider = ({children}) => {
    
    const [ authState, dispatch ] = useReducer(authReducer, initialState);

    const login = async( name = '' ) => {
      const action = {
        type: types.login,
        payload: {
          id:'ABC',
          name: name
        }
      }

      dispatch(action)
    }

  return (
    <Authcontext.Provider value={{
      authState,
      login: login
    }}>
        {children}
    </Authcontext.Provider>
  );
}


