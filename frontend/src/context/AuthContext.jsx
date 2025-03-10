import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

// Changed initial state to include dispatch
const INITIAL_STATE = {
      user: JSON.parse(localStorage.getItem("user")) || null,
      isFetching: false,
      error: false,
      dispatch: () => {} // Add empty dispatch function for initial state
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
      switch (action.type) {
            case "LOGIN_START":
                  return {
                        user: null,
                        isFetching: true,
                        error: false,
                  };

            case "LOGIN_SUCCESS":
                  return {
                        user: action.payload,
                        isFetching: false,
                        error: false,
                  };

            case "LOGIN_FAILURE":
                  return {
                        user: null,
                        isFetching: false,
                        error: true,
                  };

            case "LOGOUT":
                  return {
                        user: null,
                        isFetching: false,
                        error: false,
                  };

            default:
                  return state;
            }
};

export const AuthContextProvider = ({ children }) => {
      const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

      useEffect(() => {
            localStorage.setItem("user", JSON.stringify(state.user));
      }, [state.user]);

      return (
            <AuthContext.Provider
                  value={{
                        user: state.user,
                        isFetching: state.isFetching,
                        error: state.error,
                        dispatch,
                  }}
            >
                  {children}
            </AuthContext.Provider>
      );
};

AuthContextProvider.propTypes = {
      children: PropTypes.node.isRequired
};