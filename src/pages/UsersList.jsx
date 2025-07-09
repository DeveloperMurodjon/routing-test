import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/usersSlice'
import UserCard from '../components/UserCard'

function UsersList() {
	const dispatch = useDispatch()
	const { data, loading, error } = useSelector(state => state.users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	if (loading)
		return <p className='text-center text-gray-500'>Yuklanmoqda...</p>
	if (error) return <p className='text-center text-red-500'>{error}</p>

	return (
		<div>
			<h1 className='text-2xl font-bold mb-4 text-gray-800'>
				Foydalanuvchilar ro'yxati
			</h1>
			<div className='space-y-4'>
				{data.map(user => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	)
}

export default UsersList
