import { useState } from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import styles from './ReportExplorer.module.scss';

const ReportExplorer = (): JSX.Element => {
  const [dateRange, setDateRange] = useState<[string, string] | null>();
  return (
    <div className={styles.container}>
      Report Explorer
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
    </div>
  );
};

export default ReportExplorer;
