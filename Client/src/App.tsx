import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import AuthenticationRequired from "./router/AuthenticationRequired.tsx";
import { RootNames } from "./constants/rootNames.ts";
import AccountWall from "./pages/AccountWall.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AuthenticationRequired />}>
            <Route path={RootNames.HOME} element={<Home />} />
            <Route path={RootNames.USER_WALL} element={<AccountWall />} />
          </Route>
        </Route>

        <Route path={RootNames.SIGN_IN} element={<SignIn />} />
        <Route path={RootNames.SIGN_UP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
