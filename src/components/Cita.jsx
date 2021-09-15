import React from 'react'

export default function Cita({cita}) {
    return (
        <div className="container d-flex flex-wrap justify-content-between card mx-auto p-4 my-5 " style={{width:'400px'}}>
            <p>Mascota: {cita.mascota} <span></span></p>
            <p>Dueño: {cita.propietario} <span></span></p>
            <p>Fecha: {cita.fecha} <span></span></p>
            <p>Hora: {cita.hora} <span></span></p>
            <p>Sintomas:{cita.sintomas} <span></span></p>
        </div>
    )
}
