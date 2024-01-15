import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Page404 from "./ErrorPage/Page404";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={browserRouter}></RouterProvider>
    </>
  );
}

export default App;
