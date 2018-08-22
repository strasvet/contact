export class ErrorModel {
  status: number;
  error: {
    error: {
      errors: string[],
      code: number,
      message: string
    }
  };
}

