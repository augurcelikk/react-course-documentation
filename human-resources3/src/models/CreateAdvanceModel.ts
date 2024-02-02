interface CreateAdvanceModel {
  token: string;
  responseUserId: string;
  advanceAmount: number;
  unitOfCurrency: string;
  description: string;
  advanceType: string;
  requestDate: Date;
}

export default CreateAdvanceModel;
