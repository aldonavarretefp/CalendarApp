import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CalendarPage from '../calendar/pages/CalendarPage'
import {LoginPage} from '../auth'
import { getEnvironmentVariables } from '../helpers';
import { useAuthStore } from '../hooks';

React.memo(CalendarPage);

const AppRouter = () => {


    const { status:authStatus, checkAuthToken } = useAuthStore();

        
    useEffect(() => {
        checkAuthToken();
    }, [authStatus]);

    if(authStatus === 'checking') {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return (
        <Routes>
            {
                (authStatus !== 'authenticated')
                ? (
                    <>
                        <Route path="/auth/*" element={<LoginPage/>}/>
                        <Route path="/*" element={<Navigate to="/auth/login" />}/>
                    </>
                )
                : (
                    <>
                        <Route path="/" element={<CalendarPage/>}/>
                        <Route path="/*" element={<Navigate to="/" />}/>
                    </>
                )
            }
            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    )
}

export default AppRouter
