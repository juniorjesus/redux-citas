import React from 'react'
import { Button, Card, Icon, Table } from 'react-materialize'
import { useDispatch, useSelector } from 'react-redux'
import { BorrarCitas } from '../actions/citasAction'

const ListarCitas = () => {

    const dispatch = useDispatch()

    const { citas } = useSelector(store => store.citas)
    console.log(citas);

    const handleBorrar = (id) => {
        dispatch(BorrarCitas(id))
    }

    return (
        <Card title="Agenda">
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Sintomas</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            citas.map(cita => (
                                <tr key={cita.id}>
                                    <td>{cita.nombre}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.sintomas}</td>
                                    <td>
                                        <Button
                                            className="red"
                                            node="button"
                                            waves="light"
                                            onClick={() => {
                                                handleBorrar(cita.id)
                                            }}>
                                            Borrar
                                            <Icon right>delete</Icon>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Card>
    )
}

export default ListarCitas
