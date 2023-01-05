import { useState } from 'react';
import { Form, Radio, Checkbox, Button, RadioChangeEvent } from 'antd';
import dayjs from 'dayjs';
import DataItemExplorerFolderStructure from '../../components/DataItemExplorerFolderStructure';
import IconButton from '../../components/IconButton';
import styles from './DataItemExplorer.module.scss';
import DateRangePicker from '../../components/DateRangePicker';
import { SoapRequestBoolean, SoapRequestDateType } from '../../types/api';
import { getDefaultDateRange } from '../../utils/dateTime';

type TApplicable = 'applicableAt' | 'applicableFor';

interface IFormData {
  latestValues: boolean;
  applicable: TApplicable;
}

const DataItemExplorer = (): JSX.Element => {
  const [applicable, setApplicable] = useState<TApplicable>('applicableAt');
  const [dateRange, setDateRange] = useState<[string, string]>(getDefaultDateRange());
  const [form] = Form.useForm<IFormData>();

  const onFinish = ({ latestValues, applicable }: IFormData): void => {
    //TODO if gasday (applicableFor) then change fromDate time to 4am and toDate time to 3:59am
    const fromDate = dayjs(dateRange[0]).format('YYYY-MM-DDTHH:mm:ss');
    const toDate = dayjs(dateRange[1]).format('YYYY-MM-DDTHH:mm:ss');

    const dateType =
      applicable === 'applicableFor' ? SoapRequestDateType.gas : SoapRequestDateType.normal;

    const latestFlag = latestValues ? SoapRequestBoolean.true : SoapRequestBoolean.false;

    // eslint-disable-next-line no-console
    console.log(latestFlag, fromDate, toDate, dateType);
  };

  const applicableOnChange = (values: RadioChangeEvent): void => {
    setApplicable(values.target.value as TApplicable);
  };

  return (
    <div className={styles.container}>
      <span>Data Item Explorer</span>
      <DataItemExplorerFolderStructure />
      <span>Criteria</span>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          latestValues: false,
          applicable: 'applicableAt',
        }}
      >
        <div className={styles.formControls}>
          <div>
            <Form.Item className={styles.latestValues} name="latestValues" valuePropName="checked">
              <Checkbox>Latest Values</Checkbox>
            </Form.Item>
            <Form.Item name="applicable">
              <Radio.Group className={styles.applicable} onChange={applicableOnChange}>
                <Radio value="applicableAt">Applicable At</Radio>
                <Radio value="applicableFor">Applicable For</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item name="datePicker">
            <DateRangePicker
              dateRange={dateRange}
              setDateRange={setDateRange}
              showTime={applicable === 'applicableAt'}
            />
          </Form.Item>
        </div>
        <div className={styles.buttonsContainer}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              View Data for Data Items
            </Button>
          </Form.Item>
          <div>
            <IconButton name="CSV" />
            <IconButton name="CSV" />
            <IconButton name="XML" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DataItemExplorer;
