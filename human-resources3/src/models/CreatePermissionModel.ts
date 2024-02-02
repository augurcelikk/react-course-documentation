interface CreateAdvanceModel {
  token: string;
  responseUserId: string;
  permissionType: string;
  dateOfRequest: Date;
  startOfPermission: Date;
  endOfPermission: Date;
  permissionDuration: number;
}

export default CreateAdvanceModel;

/**
 *   "token": "string",
  "responseUserId": "string",
  "permissionType": "string",
  "dateOfRequest": "2024-02-01",
  "startOfPermission": "2024-02-01",
  "endOfPermission": "2024-02-01",
  "permissionDuration": 0
 */