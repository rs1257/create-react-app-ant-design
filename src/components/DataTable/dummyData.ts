import { FormattedData } from '../../types/props';

const rawData = {
  gasDay: {
    day: '2022-12-09T00:00:00Z',
    startUtc: '2022-12-09T05:00:00Z',
    endUtc: '2022-12-10T05:00:00Z',
    startUkLocalTime: '2022-12-09T05:00:00+00:00',
    endUkLocalTime: '2022-12-10T05:00:00+00:00',
  },
  data: [
    {
      value: 4.64461183547974,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'ALDBROUGH',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'BACTON BBL',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'BACTON IC',
    },
    {
      value: 11.2048530578613,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'BACTON PERENCO',
    },
    {
      value: 6.77572822570801,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'BACTON SEAL',
    },
    {
      value: 5.43938398361206,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'BACTON SHELL',
    },
    {
      value: 3.9482719157702,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'EASINGTON DIMLINGTON',
    },
    {
      value: 73.3190661478599,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'EASINGTON LANGELED',
    },
    {
      value: 9.40489814602884,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'EASINGTON ROUGH ST',
    },
    {
      value: 6.46115779876709,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'GRAIN NTS 1',
    },
    {
      value: 44.3208045959473,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'GRAIN NTS 2',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'HILLTOP',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'HOLE HOUSE FARM',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'HOLFORD',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'HORNSEA',
    },
    {
      value: 26.9766540527344,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'MILFORD HAVEN - DRAGON',
    },
    {
      value: 52.1744422912598,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'MILFORD HAVEN - SOUTH HOOK',
    },
    {
      value: 14.3291371023117,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'ST FERGUS MOBIL',
    },
    {
      value: 21.8587319752804,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'ST FERGUS NSMP',
    },
    {
      value: 31.645502403296,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'ST FERGUS SHELL',
    },
    {
      value: 20.5203399658203,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'STUBLACH',
    },
    {
      value: 20.4799194335938,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'TEESSIDE CATS',
    },
    {
      value: 6.01510643167773,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'TEESSIDE PX',
    },
    {
      value: 0.0,
      applicableAt: '2022-12-09T16:46:00Z',
      applicableAtUkLocalTime: '2022-12-09T16:46:00+00:00',
      name: 'THEDDLETHORPE',
    },
  ],
};

const formattedRawData = rawData.data.map((row) => {
  return {
    name: row.name,
    value: row.value,
  };
});

export const formattedData: FormattedData = {
  headers: [
    { title: 'System Entry Name', dataIndex: 'name' },
    { title: 'Flow Rate (mcm/d)', dataIndex: 'value' },
  ],
  data: formattedRawData,
};
