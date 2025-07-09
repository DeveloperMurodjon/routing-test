import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function UserDetails() {
	const { id } = useParams()
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setLoading(true)
				const res = await axios.get(
					`https://jsonplaceholder.typicode.com/users/${id}`
				)
				setUser(res.data)
			} catch (err) {
				console.log(err)
				setError('Xatolik yuz berdi')
			} finally {
				setLoading(false)
			}
		}

		fetchUser()
	}, [id])

	if (loading)
		return <p className='text-center text-gray-500'>Yuklanmoqda...</p>
	if (error) return <p className='text-center text-red-500'>{error}</p>
	if (!user) return <p className='text-center'>Foydalanuvchi topilmadi</p>

	return (
		<div className='space-y-2'>
			<h1 className='text-2xl font-bold text-gray-800'>{user.name}</h1>
			<p>
				<span className='font-semibold'>Email:</span> {user.email}
			</p>
			<p>
				<span className='font-semibold'>Telefon:</span> {user.phone}
			</p>
			<p>
				<span className='font-semibold'>Website:</span> {user.website}
			</p>
			<Link to='/users' className='text-blue-500 hover:underline text-sm'>
				← Orqaga
			</Link>
		</div>
	)
}

export default UserDetails
