import SignUp from "./components/SignUp";
import Layout from "./components/Layout";
import Error from "./components/Error";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Browse = lazy(()=> import("./components/Browse"));
const FavoriteMovies = lazy(()=> import("./components/FavoriteMovies"));
const MoviePage = lazy(()=> import("./components/MoviePage"));
const SignIn = lazy(()=> import("./components/SignIn"));


const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children: [
    {
      path:"/",
      element:<SignUp/>    
    },
    {
      path:"/login",
      element: <Suspense><SignIn /></Suspense>
    },
    {
      path:"/browse",
      element: <Suspense> <Browse/> </Suspense>
    },
    {
      path:"/movie",
      element:<Suspense><MoviePage /></Suspense>
    },
    {
      path:"/favourite",
      element: <Suspense><FavoriteMovies /></Suspense>
    }
  ], 
  errorElement: <Error />
}])


function App() {


  return (
    <main>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Layout/>
        </RouterProvider>
      </Provider>
      
    </main>
  )
}

export default App
