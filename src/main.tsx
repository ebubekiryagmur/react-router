
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {HomePage, RootLayout, UserAlbums, UserDetailPage, UserPosts, UserTodos} from "./pages";
import UsersPage, { usersLoader } from './pages/UsersPage';
import { userLoader } from './pages/UserDetailPage';
import { usersAlbumsLoader } from './pages/UserAlbums';
import { userPostsLoader } from './pages/UserPosts';
import { userTodosLoader } from './pages/UserTodos';

const router = createBrowserRouter([
   {
    path: "/",
    element:<RootLayout />,
    children: [
      {
        index: true,
        element:<HomePage />,
      },
      {
        path: "users",
        element:<UsersPage />,
        loader: usersLoader
      },
      {
        path:"users/:userId",
        children: [
          {
            index:true,
            element:<UserDetailPage />,
            loader:userLoader,
          },
          {
            path:"posts",
            element:<UserPosts />,
            loader: userPostsLoader
          },
          {
            path:"albums",
            element:<UserAlbums />,
            loader: usersAlbumsLoader
          },
          {
            path:"todos",
            element:<UserTodos />,
            loader: userTodosLoader
          }
        ]
       
      }
    ]
   }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
