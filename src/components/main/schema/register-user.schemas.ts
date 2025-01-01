import { z } from "zod";

import { typeMessenger } from "@/components/contants";

export const registerUserSchemas = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "Ім’я обов’язкове для заповнення",
    })
    .max(32, {
      message: "Ім’я не може бути довшим за 32 символи і менше ніж 3 символи",
    }),
  messengerType: z.enum(typeMessenger, {
    message: "Виберіть тип месенджера",
  }),
  messenger: z
    .string()
    .min(3, {
      message: "Месенджер обов’язковий для заповнення",
    })
    .max(64, {
      message:
        "Месенджер не може бути довшим за 64 символи і менше ніж 3 символи",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email обов’язковий для заповнення",
    })
    .email({
      message: "Введіть коректний email",
    }),
  phone: z
    .string()
    .min(1, {
      message: "Телефон обов’язковий для заповнення",
    })
    .length(9, {
      message: "Телефон повинен містити 9 цифр",
    }),
  isAgreeWithRules: z
    .boolean()
    .default(false)
    .refine((value) => value, {
      message: "Погодьтесь з правилами",
    }),
});

export type TRegisterUserSchemas = z.infer<typeof registerUserSchemas>;
