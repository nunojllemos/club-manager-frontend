import FormHeader from '@/components/molecules/Forms/Auth/Header'
import FormAuthSetPassword from '@/components/molecules/Forms/Auth/SetPassword'
import React from 'react'

const RecoverPasswordPage = () => {
    return (
        <>
            <FormHeader title='Alterar senha 🔑' message='Insira os dados em baixo para alterar a password.' />
            <FormAuthSetPassword />
        </>
    )
}

export default RecoverPasswordPage
