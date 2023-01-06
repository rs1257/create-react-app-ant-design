import { InstantaneousFlowResponseData } from '../../../types/api';

export const getInstantaneousFlowData = ({
  CurrentGasDay,
  EDPEnergyGraphTableCollection,
}: InstantaneousFlowResponseData): void => {
  const data = EDPEnergyGraphTableCollection.EDPEnergyGraphTableBE.map(
    ({ Description, EDPObjectCollection }) => {
      return {
        tableName: Description,
        tableData: EDPObjectCollection.EDPObjectBE.map((d) => d),
      };
    }
  );
  // eslint-disable-next-line no-console
  console.log(CurrentGasDay);
  // eslint-disable-next-line no-console
  console.log(data);
};
