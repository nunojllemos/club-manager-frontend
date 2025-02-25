import FormAuthHeader from '@/components/molecules/Forms/Auth/Header'
import FormAuthRegister from '@/components/molecules/Forms/Auth/Register'
import React from 'react'

const RegisterPage = () => {
    return (
        <>
            <FormAuthHeader title='Criar uma conta 🚀' message='Escolha uma opção e insira os seus dados para criar uma nova conta.' />
            <FormAuthRegister />
        </>
    )
}

export default RegisterPage
