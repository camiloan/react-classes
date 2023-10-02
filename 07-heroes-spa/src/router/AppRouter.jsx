import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='login/*'
          element={
            <PublicRouter>
              <Routes>
                <Route path='/*' element={<LoginPage />}></Route>
              </Routes>
            </PublicRouter>
          }
        ></Route>
        {/* <Route path='login' element={<LoginPage />}></Route> */}
        <Route
          path='/*'
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        ></Route>
        {/* <Route path='/*' element={<HeroesRoutes />}></Route> */}
      </Routes>
    </>
  );
};
