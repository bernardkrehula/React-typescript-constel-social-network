import { Outlet, useNavigate } from 'react-router'
import './App.css'
import { useEffect } from 'react'

function App() {
  const defaultPage = 'login';
  const navigate = useNavigate();

  useEffect(() => {
    navigate(defaultPage);  
  },[])

  return <Outlet />;
}

export default App
