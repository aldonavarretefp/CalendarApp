import { useEffect, useMemo, useState } from 'react';


import DatePicker, { registerLocale } from "react-datepicker";
import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


import { es } from 'date-fns/locale';

registerLocale('es', es);

import "react-datepicker/dist/react-datepicker.css";
import { useCalendarStore, useUiStore } from '../../hooks/';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    
    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activeEvent, startSavingEvent, setActiveEvent } = useCalendarStore();

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: 'Título del evento',
        notes: 'Descripción del evento',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        setFormIsSubmitted(true);
        
        const difference = differenceInSeconds(formValues.end, formValues.start);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
            return;
        }
        
        const { title } = formValues;

        if (title.trim().length < 2) {
            Swal.fire(
                'Error',
                'El titulo debe ser mayor a 2 caracteres',
                'error'
            );
            return;
        }
        
        await startSavingEvent(formValues);
        closeDateModal();
        setFormIsSubmitted(false);
    };

    const titleClass = useMemo(() => {
        if (!formIsSubmitted) return '';
        return formValues.title.trim().length < 2 ? 'is-invalid' : 'is-valid';
    }, [formValues.title, formIsSubmitted]);

    useEffect(() => {
      if (!activeEvent) return;
      setFormValues({...activeEvent});
    }, [activeEvent])
    

    const filterPassedTime = (time) => {
        const { start } = formValues;
        const currentDate = new Date(start);
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    const handleRequestClose = () => {
        closeDateModal();
        setActiveEvent(null);
    }

    return (
        <>
            <Modal
                isOpen={ isDateModalOpen }
                onRequestClose={ handleRequestClose }
                style={customStyles}
                className={'modal'}
                overlayClassName={'modal-bg'}
                closeTimeoutMS={200}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container" onSubmit={onSubmitForm}>

                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        <DatePicker
                            selected={formValues.start}
                            onChange={(date) => setFormValues({ ...formValues, start: date })}
                            locale={es}
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={15}
                            dateFormat="Pp"
                            timeCaption='Hora'
                        />

                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        <DatePicker
                            selected={formValues.end}
                            minDate={formValues.start}
                            onChange={(date) => setFormValues({ ...formValues, end: date })}
                            locale='es'
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={15}
                            dateFormat="Pp"
                            timeCaption='Hora'
                            filterTime={filterPassedTime}
                        />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control ${titleClass}`}
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onChange}
                        />
                        <div className="invalid-feedback">
                            Porfavor digita un título.
                        </div>
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={formValues.notes}
                            onChange={onChange}
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>

        </>
    )
}
