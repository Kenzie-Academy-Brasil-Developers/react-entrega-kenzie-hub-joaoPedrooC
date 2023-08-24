import { z } from 'zod';

const createTechSchema = z.object({
  title: z.string().nonempty("Este campo é obrigatório"),
  status: z.string().nonempty("Este campo é obrigatório"),
});

export default createTechSchema;