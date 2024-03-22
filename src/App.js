import { Outlet, createBrowserRouter } from 'react-router-dom';
import CalendarComponent from './components/CalenderComponent';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calender",
        element: <CalendarComponent/>
      },
      {
        path:"/stopwatch",
        element: <Stopwatch/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  );
}

export default App;
