export const ERROR_MSG = {
  SERVER_ERROR: "Unknown server error",
  INVALID_ATTACH_IMG: "Invalid file",
  INVALID_FIELD(field: string) {
    return `Field is invalid: ${field}`;
  },
  INVALID_PARAM(param: string) {
    return `Parameter is invalid: ${param}`;
  },
};
