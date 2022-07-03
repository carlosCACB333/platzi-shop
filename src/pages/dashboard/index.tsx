import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'common';
import { IProduct } from 'interfaces';

import { MainLayout } from 'layout';
import React from 'react';
import useSWR from 'swr';

const DashboardPage = () => {
  // const data: ChartData<'bar'> = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }],
  // };

  const { data, error } = useSWR<IProduct[]>(process.env.NEXT_PUBLIC_API_URL + '/products');

  const charData = data
    ?.map((product) => product.category)
    .reduce((prev, curr) => (prev = { ...prev, [curr.name]: ++prev[curr.name] || 1 }), {} as { [key: string]: number });

  const options: ChartOptions<'bar'> = {};
  return (
    <>
      <MainLayout>
        <>
          {charData && (
            <Chart
              data={{
                labels: Object.keys(charData!),
                datasets: [
                  { data: Object.values(charData!), backgroundColor: '#1e40af', label: 'Cantidad de categorías' },
                ],
              }}
            />
          )}
        </>
      </MainLayout>
    </>
  );
};

export default DashboardPage;
