import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

interface SignUpFormProps {
    closeSignUpForm: () => void
}
export const SignUpForm = ({ closeSignUpForm }: SignUpFormProps) => {
    const form = useFormContext()

    return (
        <div className="w-full flex gap-4 flex-col min-w-80">
            <h1 className="font-bold text-white text-5xl">Registrar</h1>
            <h2 className="text-white text-base opacity-70 font-medium">Registre sua conta</h2>
            <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="E-mail" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="user_password"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Senha" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="user_confirm_password"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Confirmação de senha" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button className="bg-primary">
                <span className="font-normal text-white">Registrar</span>
            </Button>
            <div className="flex w-full justify-between items-center absolute bottom-10 max-w-80">
                <span className="text-white text-base opacity-50 font-normal">Já possui conta?</span>
                <Button
                    className="bg-grayMedium hover:bg-grayMedium/50"
                    onClick={closeSignUpForm}
                >
                    <span className="font-normal text-white">Faça login</span>
                </Button>
            </div>
        </div>
    )
}