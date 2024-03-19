import CreateAdvanceModel from "../models/CreateAdvanceModel";
import CreateExpenseModel from "../models/CreateExpenseModel";
import CreatePermissionModel from "../models/CreatePermissionModel";
import { userMicroservice } from "../utils/api";

class UserService {
  private static instance: UserService;
  private constructor() {}
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async fetchProfile(token: string) {
    let result = await userMicroservice.post('/user/get-profile', {token});
    return result.data;
  }

  public async fetchProfileDetails(token: string) {
    let result = await userMicroservice.post('/user/get-profile', {token});
    return result.data;
  }

  public async createAdvance(advanceDto: CreateAdvanceModel) {
    let result = await userMicroservice.post('/user/create-advance', advanceDto);
    return result.data;
  }

  public async createExpense(expenseDto: CreateExpenseModel) {
    let result = await userMicroservice.post('/user/create-expense', expenseDto);
    return result.data;
  }

  public async createPermission(permissionDto: CreatePermissionModel) {
    let result = await userMicroservice.post('/user/create-permission', permissionDto);
    return result.data;
  }




}




export default UserService;
