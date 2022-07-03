import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Productos', href: '/dashboard/product' },
];
export const NavBar = () => {
  return (
    <Popover>
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start p-8" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <div className="pointer">
                <span className="sr-only">Workflow</span>
                <img
                  alt="Workflow"
                  className="h-8 w-auto sm:h-10 cursor-pointer"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                />
              </div>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-700">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:block flex-1"></div>
        <Link href="/auth/login">
          <div className="hidden md:block font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer ">Login</div>
        </Link>
      </nav>

      <Transition
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2  md:hidden shadow-xl dark:bg-gray-800 ">
          <div className="px-5 pt-4 flex items-center justify-end">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:none ">
              <span className="sr-only">Close main menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" block px-3 py-2 font-medium text-gray-500 hover:text-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 hover:text-indigo-800 shadow-lg"
          >
            Log in
          </a>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
