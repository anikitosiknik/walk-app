class LocalStoreService {
  private static instance: LocalStoreService;

  private constructor() {}

  public static getInstance(): LocalStoreService {
    if (!LocalStoreService.instance) {
      LocalStoreService.instance = new LocalStoreService();
    }

    return LocalStoreService.instance;
  }

  get authToken() {
    return localStorage.getItem("authToken") || "";
  }

  set authToken(token: string) {
    localStorage.setItem("authToken", token);
  }
}

export default LocalStoreService.getInstance();
