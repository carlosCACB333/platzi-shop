import { MenuIcon } from '@heroicons/react/solid';
import { AuthContext } from 'contexts';
import Link from 'next/link';

import { useContext, useState } from 'react';
const routes = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    Icon: (
      <>
        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </>
    ),
  },

  {
    href: '/dashboard/product',
    label: 'Productos',
    Icon: (
      <>
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </>
    ),
  },

  {
    href: '/',
    label: 'Home',
    Icon: (
      <>
        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </>
    ),
  },
];

export const SideBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <aside
          className="w-64 h-screen overflow-y-auto py-4 px-3  rounded bg-gray-800 fixed md:static z-10"
          aria-label="Sidebar"
        >
          <Link href="/">
            <div className="flex items-center pl-2.5 mb-5 cursor-pointer">
              <img
                alt="Workflow"
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">
                Platzi shop
              </span>
            </div>
          </Link>

          {user && (
            <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg my-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={user.avatar} alt={user.name} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{user.name}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</p>
              </div>
            </div>
          )}

          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.href + route.label}>
                <Link href={route.href}>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {route.Icon}
                    </svg>
                    <span className="ml-3">{route.label}</span>
                  </div>
                </Link>
              </li>
            ))}

            {user ? (
              <li onClick={logout}>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Cerrar sesión</span>
                </div>
              </li>
            ) : (
              <Link href="/auth/login">
                <li>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Iniciar sesión</span>
                  </div>
                </li>
              </Link>
            )}
          </ul>
        </aside>
      )}

      <button
        className="z-50 md:hidden absolute bottom-4 left-4 text-gray-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon height={20} />
      </button>
    </>
  );
};
