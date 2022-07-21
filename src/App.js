import React from 'react';
import { TodoProvider } from "./contexts/TodoContext";
import { AuthProvider, useAuthContext, logout } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Todos from './components/Todos';
import Login from './components/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute';


function App() {
  // const todoContext = useTodoContext()

  // We wrap the entire application with TodoContext provider, so that it
  // provides the value defined here(items and handlers) to the entire component heirachy
  // Now we don't need to pass the props to NewItem and ItemList
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='App'>
          <Greeting />
          <Routes>
            <Route path="/todos"
              element={
                <PrivateRoute>
                  <TodoProvider>
                    <Todos />
                  </TodoProvider>
                </PrivateRoute>
              }
            >
            </Route>
            <Route path="/" element={<Login />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

function Greeting() {
  const { auth, dispatch } = useAuthContext();

  // const handleLogout = (e) => {
  //   console.log('niko ndanii!');
  //   try {
  //     dispatch(logout())
  //     return <Navigate to="/" />;
  //   } catch (error) {
  //     console.log("Hiajaweza");
  //   }
  // }

  if (auth.isLoggedIn)
    return (
      <p>
        Hello, {auth.name}!
        <button onClick={e => dispatch(logout())}>Logout</button>
      </p>
    );
  else
    return (
      <>
        <p>You are not logged in</p>
        <Navigate to="/" />
      </>
    );


}

export default App;
