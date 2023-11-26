import { useDispatch, useSelector } from "react-redux";
import calendarAPI from '../api/calendarAPI';
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

    const dispatch = useDispatch();
    // authSlice
    const { status, user, errorMessage } =  useSelector((state) => state.auth);

    const startLogin = async ({email, password}) => {
        try {
            dispatch( onChecking() );
            const { data } = await calendarAPI.post('/auth', {email, password});
            
            // Guardar el token y fecha en el localStorage.
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({uid: data.uid, name: data.name}));
        } catch (error) {
            dispatch( onLogout("Credenciales no válidas") );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 3000);
        }
    }

    const startRegister = async ({name, email, password}) => {
        try {
            dispatch( onChecking() );
            const res = await calendarAPI.post('/auth/new', {name, email, password});
            console.log(res);
            // Guardar el token y fecha en el localStorage.

        } catch (error) {
            console.log(error);
            dispatch( onLogout(error.response.data?.msg || "No se pudo registrar al nuevo usuario."));
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 3000);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch( onLogout() );
            return;
        }
        try {
            const { data } = await calendarAPI.get('/auth/renew');

            // Guardar el token y fecha en el localStorage.
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( onLogin({uid: data.uid, name: data.name}) );
            
        } catch {
            localStorage.clear();
            dispatch( onLogout() );
        }
    };

    return {
        //* Propiedades.
        status,
        user,
        errorMessage,

        //* Métodos.
        startLogin,
        startRegister,
        checkAuthToken
    }
};