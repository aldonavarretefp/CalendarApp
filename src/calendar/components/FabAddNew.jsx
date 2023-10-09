import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent, activeEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            start: new Date(),
            end: new Date(),
            notes: '',
            user: {
                _id: '123',
                name: 'Carlos',
            },
            bgColor: '#f3af32',

        });
        openDateModal();
    };

    return (
        <button
            className='btn btn-primary fab'
            onClick={handleClickNew}
        >
            <i className='fas fa-plus'></i>
        </button>
    )
}
