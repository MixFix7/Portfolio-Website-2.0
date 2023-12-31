import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Home/Home";
import axios from "axios";
import SignUpPage from '../Authorization/SignUpPage';
import LoginPage from '../Authorization/LogInPage';

export const urls = {
  Home: '/',
}

export const SERVER_URL: string = 'http://localhost:8000'

const router = createBrowserRouter([
    {
      path: urls.Home,
      element: <Home/>,
    }   
])

export default router