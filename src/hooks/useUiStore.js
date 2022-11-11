import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../store/ui/uiSlice";



export const useUiStore = () => { 
    
    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector(state => state.ui); // useSelector trae el estado de ui del store

    const openDateModal = () => {
        dispatch( onOpenDateModal());
    };

    const closeDateModal = () => {
        dispatch( onCloseDateModal());
    };

    const toggleDateModal = () => {
        dispatch( isDateModalOpen ? onCloseDateModal() : onOpenDateModal());
    };

    return {
        // Propiedades
        isDateModalOpen,
        
        // Métodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }

}