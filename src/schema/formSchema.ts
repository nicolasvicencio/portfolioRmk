import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string(),
});
