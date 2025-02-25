import { Links } from '@/helpers/constants'
import { Typography } from 'antd'
import Link from 'next/link'
import React from 'react'
import { IFormAuthFooter } from './types'

const FormAuthFooter = ({ message = '', link = '' }: IFormAuthFooter) => {
    return (
        <Typography.Paragraph className='text-center'>
            {message || 'Ainda não tem uma conta.'} <Link href={Links.REGISTER}>{link || 'Registe-se'}</Link>.
        </Typography.Paragraph>
    )
}

export default FormAuthFooter
