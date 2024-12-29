import { Navbar } from "./component/Navbar";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AddUser } from "./users/AddUser";
import { ViewUser } from "./users/ViewUser"
import { EditUser } from "./users/EditUser";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar/>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: '/',
          element: <Home/>
        },

        {
          path: 'adduser',
          element: <AddUser />
        },

        {
          path: 'edituser/:id',
          element: <EditUser />
        },

        {
          path: 'viewuser/:id',
          element: <ViewUser />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
