import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from 'axios'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import authHeader from '../../../auth-header'

export default function ListarTestemunhos() {
    const [dataTestemunhos, setdataTestemunhos] = useState([])

    useEffect(() => {
        LoadTestemunhos()
    }, [])

    function LoadTestemunhos() {
        const url = "https://leaflines.onrender.com/testemunhos"
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data
                    const sortedData = data.sort((a, b) => a.nome.localeCompare(b.nome))
                    setdataTestemunhos(sortedData);
                } else {
                    alert("Error Web Service!")
                }
            })
            .catch(error => {
                alert(error)
            })
    }

    function OnDelete(id) {
        Swal.fire({
            title: 'Tem a certeza?',
            text: 'Não será possível desfazer esta ação!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Não, manter.'
        }).then((result) => {
            if (result.value) {
                SendDelete(id)
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'O seu registo foi mantido!', 'error'
                )
            }
        })
    }


    function SendDelete(userId) {
        const baseUrl = `http://localhost:3000/testemunhos/delete/${userId}`
        axios.delete(baseUrl, { headers: authHeader() })
            .then(response => {
                if (response.data.success) {
                    Swal.fire(
                        'Apagado',
                        'O registo foi apagado',
                        'success'
                    );
                    LoadTestemunhos()
                }
            })
            .catch(error => {
                alert('Error 325')
            })
    }

    return (
        <div className="containerLE m-5">
            <div className="d-flex justify-content-between">
                <div className='dashboardTitulos'><h2>Testemunhos</h2></div>
                <div>
                    <Link to="/dashboard/criarTestemunhos" className="btn btn-light" tabIndex="1" role="button">
                        Inserir novo testemunho
                    </Link>
                </div>
            </div>
            <table className="table table-responsive table-striped table-dark text-bg-secondary my-5">
                <thead className="thead-dark text-bg-dark ">
                    <tr>
                        <th scope="col" style={{ width: '10%' }}>Foto</th>
                        <th scope="col" style={{ width: '20%' }}>Nome</th>
                        <th scope="col" style={{ width: '35%' }}>Testemunho</th>
                        <th colSpan="2" style={{ width: '10%' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTestemunhos.length > 0 ? (
                        LoadFillData()
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                Nenhum testemunho encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )


    function LoadFillData() {
        return dataTestemunhos.map((data, index) => {
            return (
                <tr key={index} className="align-middle">
                    <td style={{ width: '10%' }}><img className="fotoTestemunhos" src={`http://localhost:3000/midia/${data.fotoId}`} alt={data.nome} /></td>
                    <td style={{ width: '20%' }}>{data.nome}</td>
                    <td style={{ width: '35%' }}>{data.testemunho}</td>
                    <td className="text-end" style={{ width: '5%' }}>
                        <Link className="btn btn-light " to={"/dashboard/editarTestemunhos/" + data.id} > Editar </Link>
                    </td>
                    <td className="text-end" style={{ width: '5%' }}>
                        <button className="btn btn-danger" onClick={() => OnDelete(data.id)}> Apagar </button>
                    </td>
                </tr>
            )
        })
    }
}