import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({ user }) {
	return (
		<div className='bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition'>
			<h2 className='text-lg font-semibold text-gray-800'>{user.name}</h2>
			<p className='text-sm text-gray-600'>{user.email}</p>
			<Link
				to={`/users/${user.id}`}
				className='inline-block mt-2 text-blue-500 hover:underline text-sm'
			>
				Batafsil bilish
			</Link>
		</div>
	)
}

export default UserCard
