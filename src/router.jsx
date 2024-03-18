import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layout/defaultLayout";
import Dashboard from "./components/ui/dashboard/dashboard";
import About from "./components/pages/about";
const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element:<Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "customer",
        element: <h1>Customer Board</h1>,
      },
      {
        path: "*",
        element: <h3>Not found</h3>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={BrowserRoutes} />;
};
export default Router;
