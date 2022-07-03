import { MainLayout } from 'layout';
import { PencilIcon } from '@heroicons/react/solid';
import useSWR from 'swr';
import { IProduct } from 'interfaces';
import { Modal } from 'common';
import { useRef } from 'react';
import { ProductSchema } from 'validators/form';
import { useToast } from 'hooks';
import { ax } from 'utils';
import { FolderRemoveIcon } from '@heroicons/react/outline';
import { FormProduct } from '@components/UI';

const ProductPage = () => {
  const { data, error, mutate } = useSWR<IProduct[]>(process.env.NEXT_PUBLIC_API_URL + '/products');
  const { addToast } = useToast();

  const onSave = async () => {
    const formData = Object.fromEntries(new FormData(document.getElementById('form-create') as any));

    try {
      const validData = await ProductSchema.validate({
        ...formData,
        images: [
          'https://picsum.photos/id/3/200/300',
          'https://picsum.photos/id/20/200/300',
          'https://picsum.photos/id/9/200/300',
        ],
      });
      const { data: prod } = await ax.post<IProduct>('/products', validData);
      addToast({ type: 'success', message: 'Producto guardado' });
      mutate([...data!, prod], false);
      return true;
    } catch (error: any) {
      console.log({ error });
      addToast({ type: 'error', message: error?.message || error?.response?.data || 'Error al crear' });
      return false;
    }
  };

  const onUpdate = async (product: IProduct) => {
    const formData = Object.fromEntries(new FormData(document.getElementById('form-update') as any));

    try {
      const validData = await ProductSchema.validate({
        ...formData,
        images: product.images,
      });

      const { data: prod } = await ax.put<IProduct>(`/products/${product.id}`, validData);

      addToast({ type: 'success', message: 'Producto actualizado' });
      mutate(
        data!.map((p) => (p.id === prod.id ? prod : p)),
        false
      );
      return true;
    } catch (error: any) {
      console.log({ error });
      addToast({ type: 'error', message: error?.message || error?.response?.data || 'Error al actualizar' });
      return false;
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await ax.delete(`/products/${id}`);
      addToast({ type: 'success', message: 'Producto eliminado' });
      mutate(
        data!.filter((product) => product.id !== id),
        false
      );
    } catch (error: any) {
      console.log({ error });
      addToast({ type: 'error', message: error?.response?.data || 'Error al eliminar el producto' });
    }
  };

  return (
    <MainLayout>
      <>
        <div className="lg:flex lg:items-center lg:justify-between my-2">
          <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:text-3xl sm:truncate">Lista de productos</h2>
          <Modal title="Crear nuevo producto" handleClick={onSave}>
            <FormProduct id="form-create" />
          </Modal>
        </div>

        {/* table */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg scroll">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs  uppercase border-t border-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Título
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoría
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product) => (
                <tr key={product.id} className="border-y border-gray-800 ">
                  <td className="px-6 py-4">
                    <img className="w-10 h-10 rounded" src={product.images[0]} alt={product.title}></img>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {product.title}
                  </th>
                  <td className="px-6 py-4">{product.category.name}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      className=" inline-flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-purple-300 text-xs rounded-lg px-2 py-1 mb-2 "
                    >
                      <FolderRemoveIcon className="-ml-1 mr-2 h-5 w-5 text-gray-100" aria-hidden="true" />
                      Eliminar
                    </button>
                    <Modal
                      title="Actualizar producto"
                      handleClick={() => onUpdate(product)}
                      ButtonOpen={({ onClick }) => (
                        <button
                          type="button"
                          onClick={onClick}
                          className="ml-1 inline-flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 text-xs rounded-lg px-2 py-1 mb-2 "
                        >
                          <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-100" aria-hidden="true" />
                          Actualizar
                        </button>
                      )}
                    >
                      <FormProduct id="form-update" product={product} />
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </MainLayout>
  );
};

export default ProductPage;
