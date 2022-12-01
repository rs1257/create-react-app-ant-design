import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import './EmailSubmissionForm.scss';

interface formValues {
  request: Record<string, string>;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const EmailSubmissionForm: FC = () => {
  const submitRequest = (values: formValues): void => {
    //eslint-disable-next-line
    console.log(values);
    //ToDo - Use API to send data via email, or use emailjs
  };

  return (
    <div className="email-submission-form">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={submitRequest}
        validateMessages={validateMessages}
      >
        <Form.Item name={['request', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['request', 'email']}
          label="Email"
          rules={[{ type: 'email', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['request', 'requested_data']}
          label="Requested Data"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailSubmissionForm;
