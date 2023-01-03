import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import DatePicker from '../../components/DatePicker';
import './ReportExplorer.scss';

const ReportExplorer = (): JSX.Element => {
  const [date, setDate] = useState<string | null>();
  return (
    <div className="report-explorer">
      Report Explorer
      <div className="form">
        <div className="date-picker">
          <span>Gas Day</span>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className="buttons">
          <div className="view-report-button">
            <CustomButton
              type="primary"
              size="middle"
              onClick={(): void => {
                return;
              }}
            >
              View report
            </CustomButton>
          </div>
          <div className="download-buttons">
            <button>CSV</button>
            <button>XML</button>
            <button>JSON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportExplorer;
