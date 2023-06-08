import {
  createBrowserRouter,
  //createRoutesFromElements,
  //Route,
  RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";

// https://example.com - path for nothing

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: './products/:productId', element: <ProductDetails /> },
    ]
  },
]);

// old style method of Router

/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products />} />
  </Route>
);
const router = routeDefinitions; */



function App() {
  return <RouterProvider router={router} />;
}

export default App;
