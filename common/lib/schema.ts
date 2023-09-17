export type { Input } from "valibot";
export {
  boolean,
  string,
  enumType,
  array,
  date,
  object,
  optional,
  is,
  coerce,
} from "valibot";

import type { BaseSchema, Output, ParseInfo } from "valibot";

import { ValiError } from "valibot";
import { safeParse as validotSafeParse } from "valibot";

import type { Result } from "@/common/lib/result";
import { createOk, createErr } from "@/common/lib/result";

export function safeParse<TSchema extends BaseSchema>(
  schema: TSchema,
  input: unknown,
  info?: Pick<ParseInfo, "abortEarly" | "abortPipeEarly">
): Result<Output<TSchema>, ValiError> {
  const result = validotSafeParse(schema, input, info);

  if (result.success) {
    return createOk(result.output);
  } else {
    const error = new ValiError(result.issues);
    console.error(error);
    return createErr(error);
  }
}
