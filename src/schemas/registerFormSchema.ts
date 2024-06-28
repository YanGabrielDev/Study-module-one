import { z } from "zod";

export const registerFormSchema = z.object({
    user_name: z.string({ required_error: "Campo obrigatório!" }),
    user_email: z.string({ required_error: "Campo obrigatório!" }).email({ message: 'Email inválido' }),
    user_password: z.string({ required_error: "Campo obrigatório!" }),
    user_confirm_password: z.string({ required_error: "Campo obrigatório!" })
})