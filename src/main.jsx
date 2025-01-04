import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './assets/home';
import SliderSection from './assets/project/project-1';
import Mainaitem from './Mainitem';
import ProjectTow from './assets/project/project-2';
import Projectthree from './assets/project/project-3';
import Projectfor from './assets/project/project-4';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path:"/",
        element:<Mainaitem></Mainaitem>

      },
      {
        path: "/project",
        element:<SliderSection></SliderSection>
      },
      {
        path: "/project2",
        element:<ProjectTow></ProjectTow>
      },
      {
        path: "/project3",
        element:<Projectthree></Projectthree>
      },
      {
        path: "/project4",
        element:<Projectfor></Projectfor>
      },
    ]
  },
  {
    path: '/about',
    element: <div>radwa</div>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
