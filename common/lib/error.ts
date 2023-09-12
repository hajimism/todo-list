/**
 * fetch のメソッドの使い方が変かネットワークエラー
 */
class FetchMethodError extends Error {
  override readonly name = "FetchMethodError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);

    this.cause = options?.cause;
  }
}

/**
 * response parse に失敗
 */
class ResponseParseError extends Error {
  override readonly name = "ResponseParseError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * 認証情報が足りない
 */
class AuthorizationError extends Error {
  override readonly name = "AuthorizationError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * data がスキーマに合っていない
 */
class ValidationError extends Error {
  override readonly name = "ValidationError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * どうにもならなかったときに使うエラー
 */
class InternalError extends Error {
  override readonly name = "InternalError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

export type RepositoryError =
  | FetchMethodError
  | ResponseParseError
  | AuthorizationError
  | ValidationError
  | InternalError;
