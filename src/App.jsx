import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route element ={<Main/>}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element = {<Shop/>}/>
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
