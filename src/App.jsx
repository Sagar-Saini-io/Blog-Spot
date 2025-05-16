import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import  authService  from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
// import { Outlet } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData => {
      if (userData) {
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    }))
    .catch((error) => {
      console.log("App.jsx :: useEffect/ authService.GetCurrentUser :: ", error);
    })
    .finally(() => setLoading(false));
  }, []) 

  return !loading ? (
    <div className='min-h-screen top-0 left-0 right-0 bottom-0 absolute flex flex-wrap content-between bg-gray-400' >
      <div className='w-full block' >
        <Header/>
        <main>
        Todo :   {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) :
  (
  <div>
    Succesfully Login !!!
  </div>
  )

}

export default App
