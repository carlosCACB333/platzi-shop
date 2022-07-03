import { CardProduct, Loading } from '@components/UI';
import { IProduct } from 'interfaces';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { ShopLayout } from '../layout/';

const Home: NextPage = () => {
  const { data, error } = useSWR<IProduct[]>(process.env.NEXT_PUBLIC_API_URL + '/products');

  return (
    <ShopLayout>
      <div className="grid grid-cols-12 gap-4 m-auto ">
        {data?.map((product) => (
          <div className="col-span-12 md:col-span-4 lg:col-span-3" key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}

        {!error && !data && <Loading />}
      </div>
    </ShopLayout>
  );
};

export default Home;
