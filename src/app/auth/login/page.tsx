import React from 'react'
import FormAuthLogin from '@/components/molecules/Forms/Auth/Login'
import FormAuthHeader from '@/components/molecules/Forms/Auth/Header'

const LoginPage = () => {
    return (
        <>
            <FormAuthHeader title='Olá, novamente 👋' message='Insira os seus dados para entrar.' />
            <FormAuthLogin />
        </>
    )
}

export default LoginPage
