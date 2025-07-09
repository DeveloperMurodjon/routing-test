import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'

function App() {
	return (
		<div className='max-w-3xl mx-auto p-6'>
			<Routes>
				<Route path='/' element={<Navigate to='/users' />} />
				<Route path='/users' element={<UsersList />} />
				<Route path='/users/:id' element={<UserDetails />} />
			</Routes>
		</div>
	)
}

export default App
