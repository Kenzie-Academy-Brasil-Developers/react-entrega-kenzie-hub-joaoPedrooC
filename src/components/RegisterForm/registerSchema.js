import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().nonempty("Este campo é obrigatório"),
  email: z.string().nonempty("Este campo é obrigatório").email("Por favor, forneça um email válido"),
  password: z.string()
    .min(8, "Sua senha precisa ter pelo menos 8 caracteres")
    .regex(/[A-Z]+/, "Sua senha precisa conter pelo menos uma letra maiúscula")
    .regex(/[a-z]+/, "Sua senha precisa conter pelo menos uma letra minúscula")
    .regex(/[0-9]+/, "Sua senha precisa conter pelo menos um número"),
  confirmPassword: z.string().nonempty("Este campo é obrigatório"),
  bio: z.string().nonempty("Este campo é obrigatório"),
  contact: z.string().nonempty("Este campo é obrigatório"),
  course_module: z.string().nonempty("Este campo é obrigatório")
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "As senhas não coincidem",
  path: ['confirmPassword']
});

export default registerSchema;