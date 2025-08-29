import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { HomePage } from "./pages/Home";
import { ResearchPage } from './pages/Research';
import { TeachingPage } from './pages/Teaching';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/research",
    element: <ResearchPage />,
  },
  {
    path: "/teaching",
    element: <TeachingPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
