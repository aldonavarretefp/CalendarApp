import { memo, useState } from 'react';
import Modal from 'react-modal';

import DatePicker,{registerLocale} from "react-datepicker";
import { addHours } from 'date-fns';

import { es } from 'date-fns/locale';

registerLocale('es', es);

import "react-datepicker/dist/react-datepicker.css";

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
    const [modalIsOpen, setIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'Cumpleaños del jefe',
        notes: 'Comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    function openModal() {
        setIsOpen(true);
        console.log("open modal");
    }

    function closeModal() {
        setIsOpen(false);
        console.log("close modal");
    }

    const onFormChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className={'modal'}
                overlayClassName={'modal-bg'}
                closeTimeoutMS={200}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container">

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
                        />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onFormChange}
                        />
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
                            onChange={onFormChange}
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
