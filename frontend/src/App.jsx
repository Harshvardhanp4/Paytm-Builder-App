import{BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import { PrivateRoute } from './components/privateRoute.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Signup/>}></Route>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/signin" element={<Signin/>}/>

     <Route path='/dashboard' element={
      <PrivateRoute><Dashboard/></PrivateRoute>
      }/>
     <Route path='/sendMoney' element={
      <PrivateRoute><SendMoney/></PrivateRoute>
      }/>
     <Route path='/send' element={
      <PrivateRoute>< SendMoney /></PrivateRoute>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
