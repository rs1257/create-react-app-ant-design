import { useState } from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import './ReportExplorer.scss';

const ReportExplorer = (): JSX.Element => {
  const [dateRange, setDateRange] = useState<[string, string] | null>();
  return (
    <div className="report-explorer">
      Report Explorer
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
    </div>
  );
};

export default ReportExplorer;
