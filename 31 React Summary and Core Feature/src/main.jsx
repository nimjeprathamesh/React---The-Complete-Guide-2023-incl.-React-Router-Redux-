import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import NewPost, { action as newPostAction } from './routes/NewPost'
import Post, { loader as postsLoader } from './routes/Post'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails'
import RootLayout from './routes/RouteLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Post />,
        loader: postsLoader,
        children: [
          {path: '/create-post', element: <NewPost />, action: newPostAction},
          {path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
