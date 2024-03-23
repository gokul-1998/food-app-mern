import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout>Home Pageeee</Layout>}/>
            <Route path='/user-profile' element={<span>USER PROFILE Page</span>}/>
            <Route path="*" element={<Navigate to="/" />} />
            
        </Routes>
    )
}

export default AppRoutes;