interface CreateAdvanceModel {
  token: string;
  responseUserId: string;
  expenseAmount: number;
  unitOfCurrency: string;
  description: string;
  expenseType: string;
  requestDate: Date;
}

export default CreateAdvanceModel;

/**
  "token": "string",
  "responseUserId": "string",
  "requestDate": "2024-02-01",
  "description": "string",
  "expenseAmount": 0,
  "expenseType": "string",
  "unitOfCurrency": "string"
 */