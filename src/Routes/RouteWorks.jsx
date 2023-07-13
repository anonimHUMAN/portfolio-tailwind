import { Route, Routes } from "react-router";
import Cards from "../Components/Cards";
function RouteWorks() {
    return (
        <>
            <Routes>
                <Route element={<Cards />} path="/works"></Route>
            </Routes>
        </>
    )
}

export default RouteWorks