// Generated by ts-to-zod
import { z } from "zod";

export const typeMetaSchema = z.object({
  apiVersion: z
    .string()
    .describe(
      "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"
    ),
  kind: z
    .string()
    .describe(
      "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
    )
});