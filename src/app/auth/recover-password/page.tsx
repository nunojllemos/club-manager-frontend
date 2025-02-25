import FormHeader from '@/components/molecules/Forms/Auth/Header'
import FormAuthRecoverPassword from '@/components/molecules/Forms/Auth/RecoverPassword'
import React from 'react'

const RecoverPasswordPage = () => {
    return (
        <>
            <FormHeader title='Recuperar senha 🔑' message='Insira os dados em baixo para recuperar a password.' />
            <FormAuthRecoverPassword />
        </>
    )
}

export default RecoverPasswordPage
