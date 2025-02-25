'use client'
import { Tabs } from 'antd'
import React from 'react'
import { UserOutlined, TrophyOutlined } from '@ant-design/icons'
import NewUserForm from './NewUserForm'
import NewClubForm from './NewClubForm'

const FormAuthRegister = () => {
    const tabs = [
        {
            key: 'user-register-tab',
            label: 'Utilizador',
            children: <NewUserForm />,
            icon: <UserOutlined />,
        },
        {
            key: 'club-register-tab',
            label: 'Clube',
            children: <NewClubForm />,
            icon: <TrophyOutlined />,
        },
    ]
    return <Tabs className='mt-12' defaultActiveKey='1' items={tabs} />
}

export default FormAuthRegister
