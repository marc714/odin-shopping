import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import ShoppingPage, { productLoader } from "./pages/ShoppingPage.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartContext from './context/CartContext.jsx';


const Router = () => {
    // https://reactrouter.com/en/main/utils/create-routes-from-elements
    // createRoutesFromElements is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.

    // const router = createBrowserRouter([
    //     {
    //       path: "/",
    //       element: <App />,
    //       errorElement: <ErrorPage />,
    //     },
    //     {
    //       path: "shop",
    //       element: <ShoppingPage />,
    //     },
    // ]);

    // JSX below vs objects above
    {/* useParams will see that we defined a custom parameters we defined in our route: */}
    {/* https://youtu.be/Ul3y1LXxzdU?si=_yuAPmYkpqgku-6Y&t=766 */}
    {/* https://youtu.be/oTIJunBa6MA?si=SvzWYEAfOiJbn_0E&t=888 */}
    // https://www.youtube.com/watch?v=t7VmF4WsLCo

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={ <MainLayout /> }>
          {/* <CartContext> */}
            <Route index element={ <App />} />
            <Route path="shop" element={ <ShoppingPage />} loader={productLoader} />       
            <Route path="shop/product/:id"  element={ <ProductPage /> } />
            <Route path="*" element={ <ErrorPage />} />
          {/* </CartContext> */}
        </Route>
      )
    )
    
    
    return <RouterProvider router={router} />
};

export default Router;