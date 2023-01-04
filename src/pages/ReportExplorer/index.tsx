import { useState } from 'react';
import styles from './ReportExplorer.module.scss';
import CustomButton from '../../components/CustomButton';
import DatePicker from '../../components/DatePicker';
import IconButton from '../../components/IconButton';

const ReportExplorer = (): JSX.Element => {
  const [date, setDate] = useState<string | null>();
  return (
    <div className={styles.container}>
      Report Explorer
      <div className={styles.form}>
        <div className={styles.datePicker}>
          <span>Gas Day</span>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.reportButton}>
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
          <div className={styles.downloadButtons}>
            <IconButton name="CSV" />
            <IconButton name="XML" />
            <IconButton name="JSON" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportExplorer;
