import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, activeEvent } = useCalendarStore();
    const { isDateModalOpen } = useUiStore();

    
    const handleDelete = () => {
        console.log("On delete event");
        startDeletingEvent();
    };

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={ handleDelete }
            style={{
                'display': activeEvent && !isDateModalOpen ? 'block' : 'none'
            }}
        >
            <i className='far fa-trash-can'></i>
        </button>
    )
}
