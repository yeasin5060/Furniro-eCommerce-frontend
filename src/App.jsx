import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route element ={<Main/>}>
        <Route path="/" element = {<Home/>}/>
     </Route>
    )
  );

  return (
    <>
      <RouterProvider
      router={router}
    />
    </>
  )
}

export default App