import { z } from "zod";

const AuthFormValues = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 chars" })
    .max(15),
});

type AuthFormValues = z.infer<typeof AuthFormValues>;

export const authFormValidation = ({ email, password }: AuthFormValues) => {
  const authResults = AuthFormValues.safeParse({ email, password });
  if (!authResults.success) {
    const errorResults = authResults.error.format();
    return errorResults;
  }
  return undefined;
};
