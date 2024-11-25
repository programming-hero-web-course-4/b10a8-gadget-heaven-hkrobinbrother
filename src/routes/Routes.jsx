import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Faq from "../pages/Faq";
import ProductDetails from "../pages/ProductDetails";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/:category',
                    }

                ]
            },
            {
                path: 'products/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('/products.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }

        ]
    },
])

export default routes;