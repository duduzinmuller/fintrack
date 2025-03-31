import z from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: 'O email é inválido',
    })
    .trim()
    .min(1, {
      message: 'O email é obrigatório',
    }),
  password: z.string().trim().min(6, {
    message: 'A senha deve ter no minímo 6 caracteres',
  }),
  terms: z.boolean().optional(),
})
