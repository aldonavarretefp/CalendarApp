import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CalendarPage from '../calendar/pages/CalendarPage'
import {LoginPage} from '../auth'
import { getEnvironmentVariables } from '../helpers';

React.memo(CalendarPage);

const AppRouter = () => {

    const authStatus = 'checking';
    console.log(authStatus);

    return (
        <Routes>
            {
                (authStatus !== 'authenticated')
                ? <Route path="/auth/*" element={<LoginPage/>}/>
                : <Route path="/*" element={<CalendarPage/>}/>
            }
            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    )
}

export default AppRouter
