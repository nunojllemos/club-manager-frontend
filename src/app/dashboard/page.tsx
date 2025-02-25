import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function Dashboard() {
    const token = cookies().get('auth-token')?.value // Check auth token

    if (!token) {
        redirect('/login') // Redirect if not logged in
    }

    return <h1>Welcome to the Dashboard!</h1>
}
