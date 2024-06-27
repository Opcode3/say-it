import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.tsx";
import { About } from "./pages/about/About.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Incubation from "./pages/incubation/Incubation.tsx";
import Error404 from "./pages/404.tsx";
import { AppContextProvider } from "./context/AppContext.tsx";
import IndexSurvey from "./pages/survey/Index.tsx";
import ResponseSurvey from "./pages/survey/response.tsx";
import SurveyUserRegistration from "./pages/survey/User_registration.tsx";
import IndexAdmin from "./pages/admin/Index.tsx";
import RecordSurvey from "./pages/admin/record.tsx";

interface RouteProps {
  [key: string]: any;
}

const GuardedRoute: React.FC<
  { element: React.ComponentType<any>; isAuthenticated: boolean } & RouteProps
> = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Component {...rest} /> : <Error404 />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    errorElement: <Error404 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/incubation-program",
    element: <Incubation />,
  },
  {
    path: "/survey",
    element: <GuardedRoute element={IndexSurvey} isAuthenticated={true} />,
  },
  {
    path: "/survey-response",
    element: <GuardedRoute element={ResponseSurvey} isAuthenticated={true} />,
  },
  {
    path: "/survey-user-data",
    element: (
      <GuardedRoute element={SurveyUserRegistration} isAuthenticated={true} />
    ),
  },
  {
    path: "/admin",
    element: <GuardedRoute element={IndexAdmin} isAuthenticated={true} />,
  },
  {
    path: "/admin/survey/record",
    element: <GuardedRoute element={RecordSurvey} isAuthenticated={true} />,
  },
  {
    path: "/admin/survey",
    element: <GuardedRoute element={RecordSurvey} isAuthenticated={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
