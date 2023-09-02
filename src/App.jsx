import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Browse = lazy(()=> import("./components/Browse"));
const FavoriteMovies = lazy(()=> import("./components/FavoriteMovies"));
const MoviePage = lazy(()=> import("./components/MoviePage"));
const SignIn = lazy(()=> import("./components/SignIn"));
const SignUp = lazy(()=> import("./components/SignUp"));
const Error = lazy(()=> import('./components/Error'));


const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children: [
    {
      path:"/",
      element:<Suspense><SignUp/></Suspense>    
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
      element: <Suspense ><FavoriteMovies /></Suspense>
    }
  ], 
  errorElement: <Suspense><Error /></Suspense>
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
