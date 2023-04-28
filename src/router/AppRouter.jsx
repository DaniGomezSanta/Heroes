import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui'; 
import {LoginPage} from '../auth/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
    <>

    <Routes>
      
        <Route path='login' element={
        <PublicRoute>
          <LoginPage/>
        </PublicRoute>    
        }/>


        <Route path='/*' element={
        <PrivateRoute>
          <HeroesRoutes/>
        </PrivateRoute>} />


        {/* <Route path='/*' element={<HeroesRoutes/>}/> */}
    </Routes>
    </>
  )
}

export default AppRouter
