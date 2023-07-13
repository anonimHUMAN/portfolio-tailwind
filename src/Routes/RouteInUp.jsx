import { Route, Routes } from "react-router";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
function RouteInUp() {
    return (
        <>
            <Routes>
                <Route element={<SignIn />} path="/register"></Route>
                <Route element={<SignUp />} path="/login"></Route>
            </Routes>
        </>
    )
}

export default RouteInUp