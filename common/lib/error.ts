import type { ValiError } from "valibot";

/**
 * fetch のメソッドの使い方が変かネットワークエラー
 */
export class FetchMethodError extends Error {
  override readonly name = "FetchMethodError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);

    this.cause = options?.cause;
  }
}

/**
 * response parse に失敗
 */
export class ResponseParseError extends Error {
  override readonly name = "ResponseParseError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * 認証情報が足りない
 */
export class AuthorizationError extends Error {
  override readonly name = "AuthorizationError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * リソースが見つからない
 */
export class NotFoundError extends Error {
  override readonly name = "NotFoundError" as const;
  constructor(message: string, options?: { cause: unknown }) {
    super(message, options);
    this.cause = options?.cause;
  }
}

/**
 * どうにもならなかったときに使うエラー
 */
export class InternalError extends Error {
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
  | NotFoundError
  | ValiError
  | InternalError;
