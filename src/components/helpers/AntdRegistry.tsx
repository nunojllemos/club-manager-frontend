'use client' // Only this component runs on the client

import React, { useState } from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider, createCache } from '@ant-design/cssinjs'

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
    const [cache] = useState(() => createCache())

    return (
        <StyleProvider cache={cache}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#ed7474', // Change primary color
                        borderRadius: 5, // Change border radius
                        colorLink: '#ed7474',
                    },
                    components: {
                        Typography: {
                            fontWeightStrong: 500,
                            fontFamily: 'var(--font-inter)',
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </StyleProvider>
    )
}
