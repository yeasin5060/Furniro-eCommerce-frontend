import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Singleproduct from "./Pages/Sigleproduct/Singleproduct";
import Signup from "./Pages/SignUp/Signup";
import Login from "./Pages/Login/Login";



function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
        <Route path="/" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route element ={<Main/>}>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/singleproduct" element = {<Singleproduct/>}/>
        </Route>
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
