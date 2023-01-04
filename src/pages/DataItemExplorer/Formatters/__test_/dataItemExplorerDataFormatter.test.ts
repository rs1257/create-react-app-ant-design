import { getDataItemExplorerData } from '../dataItemExplorerDataFormatter';

describe('formats data correctly for data item explorer', () => {
  const publicationObjectDataItems = [
    {
      ApplicableAt: '2022-12-01T00:00:00Z',
      ApplicableFor: '2022-12-01T00:00:00Z',
      Value: 39,
      GeneratedTimeStamp: '2022-12-02T12:01:01Z',
      QualityIndicator: 'L',
      Substituted: 'N',
      CreatedDate: '2022-12-02T12:01:14Z',
    },
    {
      ApplicableAt: '2022-12-02T00:00:00Z',
      ApplicableFor: '2022-12-02T00:00:00Z',
      Value: 39,
      GeneratedTimeStamp: '2022-12-03T12:01:01Z',
      QualityIndicator: 'L',
      Substituted: 'N',
      CreatedDate: '2022-12-03T12:01:14Z',
    },
    {
      ApplicableAt: '2022-12-03T00:00:00Z',
      ApplicableFor: '2022-12-03T00:00:00Z',
      Value: 39,
      GeneratedTimeStamp: '2022-12-03T12:01:01Z',
      QualityIndicator: 'L',
      Substituted: 'N',
      CreatedDate: '2022-12-03T12:01:14Z',
    },
  ];
  const DataItemExplorerDataItem = [
    {
      PublicationObjectName: 'Calorific Value, ApachePSBlackstart, Industrial Offtake',
      PublicationObjectData: { CLSPublicationObjectDataBE: publicationObjectDataItems },
    },
  ];
  it('should return data correctly formatted for data tables', () => {
    const formattedData = getDataItemExplorerData(DataItemExplorerDataItem);
    expect(formattedData[0].headers[0]).toHaveProperty('title');
    expect(formattedData[0].headers[0]).toHaveProperty('dataIndex');
    expect(formattedData[0].meta).toHaveProperty('name');
  });
});
