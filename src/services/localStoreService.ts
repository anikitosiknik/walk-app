class LocalStoreService {
  private static instance: LocalStoreService;

  private constructor() {}

  public static getInstance(): LocalStoreService {
    if (!LocalStoreService.instance) {
      LocalStoreService.instance = new LocalStoreService();
    }

    return LocalStoreService.instance;
  }
  public getAuthToken() {
    return localStorage.getItem("authToken") || "";
  }

  public setAuthToken(token: string) {
    return localStorage.setItem("authToken", token);
  }
}

export default LocalStoreService.getInstance();
