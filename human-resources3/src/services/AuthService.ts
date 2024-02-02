import { authPublicMicroservice } from "../utils/api";

class AuthService {
  private static instance: AuthService;
  private constructor() {}
  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(email: string, password: string) {
    let result = await authPublicMicroservice.post('/auth/login', {email, password});
    return result.data;
  }
}

export default AuthService;
