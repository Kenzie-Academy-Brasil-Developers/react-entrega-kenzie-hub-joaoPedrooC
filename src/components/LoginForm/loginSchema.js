import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().nonempty("Este campo é obrigatório").email("Por favor, forneça um email válido"),
  password: z.string().nonempty("Este campo é obrigatório"),
});

export default loginSchema;