import React, { FC, PropsWithChildren } from 'react';
import { IProduct } from '../../interfaces/product';
interface Props {
  id: string;
  product?: IProduct;
}
export const FormProduct: FC<Props> = ({ id, product }) => {
  return (
    <form id={id}>
      <div className="grid grid-cols-12 gap-6 text-left">
        <div className="col-span-12 sm:col-span-6">
          <label className="block font-medium text-gray-300">Título</label>
          <input
            name="title"
            type="text"
            className="bg-gray-800 text-gray-200 border border-gray-600 text-sm rounded-lg block w-full p-2.5"
            defaultValue={product?.title || ''}
          />
          <p className="mt-2 text-sm text-gray-500">Escribe el título del producto</p>
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label className="block font-medium text-gray-300">Precio</label>
          <input
            name="price"
            type="number"
            className="bg-gray-800 text-gray-200 border border-gray-600 text-sm rounded-lg block w-full p-2.5"
            defaultValue={product?.price || 0}
          />
          <p className="mt-2 text-sm text-gray-500">Escribe el precio del producto</p>
        </div>

        <div className="col-span-12 ">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Categoría</label>
          <select
            className="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:border-indigo-500 block w-full p-2.5"
            name="categoryId"
            defaultValue={product?.category.id || '1'}
          >
            <option value="1">Clothes</option>
            <option value="2">Electronics</option>
            <option value="3">Furniture</option>
            <option value="4">Toys</option>
            <option value="5">Others</option>
          </select>
        </div>

        <div className="col-span-12">
          <label className="block font-medium text-gray-300">Descripción</label>
          <textarea
            name="description"
            rows={3}
            className="bg-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Describe el producto"
            defaultValue={product?.description || ''}
          />
          <p className="mt-2 text-sm text-gray-500">Escribe la descripción del producto</p>
        </div>

        <div className="col-span-12 ">
          <label className="block text-sm font-medium text-gray-300"> Seleccionar una foto </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  // onClick={() => document.getElementById('images')?.click()}
                  className="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Selecciona una imagen</span>
                  <input type="file" className="sr-only" id="images" multiple />
                </label>
                <p className="pl-1"> o arraste y deje caer en esta zona</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
