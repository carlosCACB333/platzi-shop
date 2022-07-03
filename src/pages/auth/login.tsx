import { Toast } from '@components/UI';
import { AuthContext } from 'contexts';
import { ShopLayout } from 'layout';
import React, { useContext, useRef } from 'react';

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get('email')!.toString();
    const password = formdata.get('password')!.toString();

    signIn(email, password);
  };

  return (
    <ShopLayout>
      <form className="w-96  m-auto mt-8 p-8 border border-gray-600 rounded-lg" onSubmit={handleSubmit}>
        <div className="flex my-8 justify-center">
          <img
            alt="Workflow"
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Correo
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Iniciar sesión
        </button>
      </form>
    </ShopLayout>
  );
};

export default LoginPage;
