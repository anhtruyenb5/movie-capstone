import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import SignIn from '../pages/SignIn/SignIn';
import UserTemPlate from '../template/UserTemplate/UserTemPlate';
import AdminTemlate from '../template/AdminTemplate/AdminTemlate';
import MovieManager from '../pages/MovieManager/MovieManager';
import AddMovie from '../pages/AddMovie/AddMovie';
import SignUp from '../pages/SignUp/SignUp';
import EditMovie from '../pages/EditMovie/EditMovie';

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserTemPlate />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminTemlate />,
      children: [
        {
          path: "quan-li-phim",
          element: <MovieManager />,
        },
        // {
        //   // path: "them-phim",
        //   element: <AddMovie />,
        //   index: "true",
        // },
        {
          path: "them-phim",
          element: <AddMovie />,
        },
        {
          path: "edit-phim/:id",
          element: <EditMovie />,
        }
      ],
    },
    {
      path: "/detail/:id",
      element: <DetailPage />
    },

  ]);
  return routes;
}

export default useRoutesCustom