import { Route, Routes } from "react-router";
import Home from "../Components/Home";
function RouteHome() {
    return (
        <>
            <Routes>
                <Route element={<Home />} path="/"></Route>
            </Routes>
        </>
    )
}

export default RouteHome