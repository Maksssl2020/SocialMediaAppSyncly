import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import AuthenticationRequired from "./router/AuthenticationRequired.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AuthenticationRequired />}>
            <Route path={"/"} element={<Home />} />
          </Route>
        </Route>

        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
