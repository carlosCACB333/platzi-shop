import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
interface Props {
  data: ChartData<'bar'>;
  options?: ChartOptions;
}
export const Chart: FC<Props> = ({ data, options }) => {
  return (
    <div className="p-8 ">
      <Bar data={data} title="Categorías" />
    </div>
  );
};
