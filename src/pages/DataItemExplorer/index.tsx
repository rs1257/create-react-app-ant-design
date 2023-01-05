import { useState } from 'react';
import { Form, Radio, Checkbox, Button, DatePicker, RadioChangeEvent } from 'antd';
import dayjs from 'dayjs';
import DataItemExplorerFolderStructure from '../../components/DataItemExplorerFolderStructure';
import IconButton from '../../components/IconButton';
import styles from './DataItemExplorer.module.scss';

const { RangePicker } = DatePicker;

type TApplicable = 'applicableAt' | 'applicableFor';

interface IFormData {
  latestValues: boolean;
  applicable: TApplicable;
  datePicker: [string, string];
}

const DataItemExplorer = (): JSX.Element => {
  const [applicable, setApplicable] = useState<TApplicable>('applicableAt');
  const [form] = Form.useForm<{
    latestValues: boolean;
    applicable: TApplicable;
    datePicker: [string, string];
  }>();

  const onFinish = (values: IFormData): void => {
    // eslint-disable-next-line no-console
    console.log(values);
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
          datePicker: [dayjs(), dayjs()],
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
            <RangePicker showTime={applicable === 'applicableAt'} />
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
