export class ResponseUtils {
  static success(message: string, data: object, url: string) {
    return {
      success: true,
      message,
      data,
      url,
    };
  }

  static error(message: string) {
    return {
      success: false,
      message,
    };
  }
}
