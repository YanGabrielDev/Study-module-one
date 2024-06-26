'use client'
import { useState } from "react"
import { SignForm } from "../SignForm"
import { SignUpForm } from "../SignUpForm"
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'

interface LoginForm {
}

export const LoginForm = ({ }: LoginForm) => {
    const [showSignUpForm, setShowSignUpform] = useState(false)
    const form = useForm()
    const openSignUpForm = () => { setShowSignUpform(true), form.reset() }
    const closeSignUpForm = () => { setShowSignUpform(false), form.reset() }

    const onSubmit = () => { }
    console.log(form.watch());

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