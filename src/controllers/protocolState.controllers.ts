import getTableData, { tableParams } from "../utils/getTableData";

const protocolStateParams: tableParams = {
  tableName: "public_protocol_state",
};

export const getSybilsVerified = getTableData(protocolStateParams);
