import { z } from 'zod';

export const loginFormSchema = z.object({
    user_email: z.string().email({ message: 'Email inválido' }),
    user_password: z.string().min(8, { message: "A senha precisa ter pelo menos 8 digitos." }).max(25, { message: "A senha ultrapassou o limite de caracteres" })
})