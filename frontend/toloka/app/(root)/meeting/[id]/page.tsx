import React from 'react'
import { useNavigation } from 'next/navigation'
const Meeting = () => {
    const router = useNavigation()
    return (
        <div>Meeting room: #{router.query.id}</div>
    )
}

export default Meeting
