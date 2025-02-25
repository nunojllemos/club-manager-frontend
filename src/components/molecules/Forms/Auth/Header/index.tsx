'use client'
import React from 'react'
import { Typography } from 'antd'
import { IHeader } from './types'

const FormAuthHeader = ({ title, message }: IHeader) => {
    return (
        <header>
            <Typography.Title level={2}>{title}</Typography.Title>
            <Typography.Paragraph>{message}</Typography.Paragraph>
        </header>
    )
}

export default FormAuthHeader
