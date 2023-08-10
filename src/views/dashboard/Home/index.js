import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import AuthService from '../../../auth-service'
import Dashboard from '../dashboard'

import CriarLoja from "../Criar/criarLoja"
import CriarTestemunhos from "../Criar/criarTestemunhos"
import CriarUsers from "../Criar/criarUsers"

import EditarLoja from "../Editar/editarLoja"
import EditarPagina from "../Editar/editarPagina"
import EditarTestemunhos from "../Editar/editarTestemunhos"
import EditarUsers from "../Editar/editarUsers"

import ListarLoja from '../Listar/listarLoja'
import ListarTestemunhos from '../Listar/listarTestemunhos'
import ListarUsers from '../Listar/listarUsers'


function Home() {
    const navigate = useNavigate()
    const [ setCurrentUser] = useState(null)

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (!user) {
            navigate('/login')
        } else {
            setCurrentUser(user)
        }
    }, [navigate, setCurrentUser])


    return (
        <Dashboard>

            <Route path="/criarLoja" element={<CriarLoja/>}/>
            <Route path="/criarTestemunhos" element={<CriarTestemunhos/>}/>
            <Route path="/criarUsers" element={<CriarUsers/>} />

            <Route path="/editarLoja/:LojaId" element={<EditarLoja/>}/>
            <Route path="/" element={<EditarPagina/>}/>
            <Route path="/editarTestemunhos/:TestemunhosId" element={<EditarTestemunhos/>}/>
            <Route path="/editarUsers/:userId" element={<EditarUsers/>}/>
            
            <Route path="/listarLoja" element={<ListarLoja/>}/>
            <Route path="/listarTestemunhos" element={<ListarTestemunhos/>}/>
            <Route path="/listarUsers" element={<ListarUsers/>}/>

        </Dashboard>
    )
}
export { Home }