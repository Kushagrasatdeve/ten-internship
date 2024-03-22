import React from 'react';
import { Link} from 'react-router-dom';

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);



  return (
    <>

      <div 
        className={` ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 w-64 h-screen bg-gray-200 shadow-lg duration-300 transition-transform`}
      >
        <div className="p-4">
          <ul>
          <Link to="/">
            <li  className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                TIMESHEET
            </li>
            </Link>
            <Link to="/stopwatch">
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                TIME TRACKER
            </li>
            </Link>
            <Link to="/calender">
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                CALENDAR
            </li>
            </Link>
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                DASHBOARD
            </li>
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                REPORTS
            </li>
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                PROJECTS
            </li>
            <li className="block py-2 my-2 hover:bg-blue-500 hover:text-white rounded-md">
                TEAM
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
