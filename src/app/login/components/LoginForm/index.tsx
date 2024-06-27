'use client'
import { useState } from "react"
import { SignForm } from "../SignForm"
import { SignUpForm } from "../SignUpForm"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { LoginFormData } from "@/interfaces/loginForm.interface"
import { userLogin, userRegister } from "@/services/login.service"

interface LoginForm {
}

export const LoginForm = ({ }: LoginForm) => {
    const [showSignUpForm, setShowSignUpform] = useState(false)
    const form = useForm()

    const openSignUpForm = () => { setShowSignUpform(true), form.reset() }

    const closeSignUpForm = () => { setShowSignUpform(false), form.reset() }

    const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
        try {
            const { user_confirm_password, user_email, user_name, user_password } = formData

            showSignUpForm ? await userRegister({
                confirmPassword: user_confirm_password ?? '',
                email: user_email ?? '',
                name: user_name ?? '',
                password: user_password ?? ''
            }) : await userLogin({
                email: user_email ?? '',
                password: user_password ?? ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} >
                {showSignUpForm
                    ? <SignUpForm closeSignUpForm={closeSignUpForm} />
                    : <SignForm openSignUpForm={openSignUpForm} />
                }
            </form>
        </Form>

    )
}