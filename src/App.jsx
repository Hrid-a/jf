import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./components/Layout"))
const Browse = lazy(() => import("./components/Browse"));
const FavoriteMovies = lazy(() => import("./components/FavoriteMovies"));
const MoviePage = lazy(() => import("./components/MoviePage"));
const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));
const Error = lazy(() => import('./components/Error'));
const SearchPage = lazy(() => import("./components/SearchPage"));
const Settings = lazy(() => import("./components/Settings"));


const router = createBrowserRouter([{
  path: "/",
  element: <Suspense> <Layout /> </Suspense>,
  children: [
    {
      path: "/",
      element: <Suspense><SignUp /></Suspense>
    },
    {
      path: "/login",
      element: <Suspense><SignIn /></Suspense>
    },
    {
      path: "/browse",
      element: <Suspense> <Browse /> </Suspense>
    },
    {
      path: "/movie",
      element: <Suspense><MoviePage /></Suspense>
    },
    {
      path: "/favourite",
      element: <Suspense ><FavoriteMovies /></Suspense>
    },
    {
      path: "/search",
      element: <Suspense><SearchPage /></Suspense>
    },
    {
      path: "/settings",
      element: <Suspense><Settings /></Suspense>
    }
  ],
  errorElement: <Suspense><Error /></Suspense>
}])


function App() {


  return (
    <main>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </Provider>

    </main>
  )
}

export default App
