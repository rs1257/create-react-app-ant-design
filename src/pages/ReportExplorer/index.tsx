import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import DatePicker from '../../components/DatePicker';
import './ReportExplorer.scss';

const ReportExplorer = (): JSX.Element => {
  const [date, setDate] = useState<string | null>();
  return (
    <div className="report-explorer">
      Report Explorer
      <div className="report-explorer-form">
        <div className="gas-day-date-picker">
          <span>Gas Day</span>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className="form-buttons">
          <div className="form-buttons__view-report-button">
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
          <div className="form-buttons__download-buttons">
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
