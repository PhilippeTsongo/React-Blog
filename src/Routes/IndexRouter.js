// routes.js

import Home from '../Home';
import Create from '../Create';
import BlogDetails from '../BlogDetails';
import NotFound from '../NotFound';
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
  },
  {
    name: 'not-found',
    path: '*',
    element: <NotFound />
  }
  // Add more routes as needed
];

export default routes;
