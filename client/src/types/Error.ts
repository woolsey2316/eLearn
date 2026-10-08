export type ErrorWithMessage = {
  data: {
    msg: string
  }
}

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof (error as Record<string, unknown>).data === 'object' &&
    (error as ErrorWithMessage).data !== null &&
    typeof (error as ErrorWithMessage).data.msg === 'string'
  )
}

export function getErrorMessage(error: unknown, fallback = "Something went wrong"): string {
  if (typeof error === "string" && error.trim()) {
    return error;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const candidate = error as {
      error?: unknown;
      data?: unknown;
      message?: string;
      msg?: string;
    };

    // RTK Query queryFulfilled rejections wrap the real error under `error`
    if ("error" in candidate && candidate.error !== undefined) {
      return getErrorMessage(candidate.error, fallback);
    }

    if (typeof candidate.message === "string" && candidate.message.trim()) {
      return candidate.message;
    }

    if (typeof candidate.msg === "string" && candidate.msg.trim()) {
      return candidate.msg;
    }

    const data = candidate.data;
    if (typeof data === "string" && data.trim()) {
      return data;
    }

    if (typeof data === "object" && data !== null) {
      const fields = data as Record<string, unknown>;
      if (typeof fields.message === "string" && fields.message.trim()) {
        return fields.message;
      }
      if (typeof fields.msg === "string" && fields.msg.trim()) {
        return fields.msg;
      }

      const firstFieldError = Object.values(fields).find(
        (value): value is string => typeof value === "string" && value.trim().length > 0
      );
      if (firstFieldError) {
        return firstFieldError;
      }
    }
  }

  return fallback;
}
