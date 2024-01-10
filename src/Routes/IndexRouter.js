// routes.js

import Home from '../Home';
import Create from '../Create';
import BlogDetails from '../BlogDetails';
// Import other components as needed

const routes = [
  {
    name: '/',
    path: '/',
    element: <Home />,
  },
  {
    name: 'create',
    path: '/create',
    element: <Create />,
  },
  {
    name: 'blog-details',
    path: 'blog/:id',
    element: <BlogDetails />
  }
  // Add more routes as needed
];

export default routes;
