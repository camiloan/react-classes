import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar/>
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='about' element={<AboutPage />}></Route>
        {/* <Route path='/*' element={<LoginPage />}></Route> */}
        <Route path='/*' element={<Navigate to='/about' />}></Route>
      </Routes>
    </UserProvider>
  );
};
