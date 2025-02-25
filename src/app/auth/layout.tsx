import FormWrapper from '@/components/atoms/FormWrapper'
import { IChildren } from '@/helpers/types'
import React from 'react'

const AuthLayout = ({ children }: IChildren) => {
    return (
        <main className='min-h-screen flex justify-center items-center'>
            <FormWrapper>{children}</FormWrapper>
        </main>
    )
}

export default AuthLayout
