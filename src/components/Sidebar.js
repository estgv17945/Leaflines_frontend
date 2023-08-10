import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import "../assets/style.css"

import {
    Web,
    VerifiedUser,
    DynamicForm,
    Work,
}

    from "@mui/icons-material";


export default function Sidebar() {
    const location = useLocation()
    const isActive = (path) => {
        if (path === "/dashboard") {
            return location.pathname === path
        }
        if (location.pathname === path) {
            return true
        }
        if (location.pathname.startsWith(path + '/')) {
            return true
        }
        const editingPath = path.replace("listar-", "editar-")
        const creatingPath = path.replace("listar-", "criar-")
        if (location.pathname.startsWith(editingPath) || location.pathname.startsWith(creatingPath)) {
            return true
        }
        return false
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Página</h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard" className={`link ${isActive("/dashboard") && "active"}`}>
                            <li className="sidebarListItem" style={{ backgroundColor: isActive("/dashboard") ? '#829893' : 'transparent' }}>
                                <Web className="sidebarIcon" />
                                Página
                            </li>
                        </Link>
                        <Link to="/dashboard/listarLoja" className={`link ${isActive("/dashboard/listarLoja") && "active"}`}>
                            <li className="sidebarListItem" style={{ backgroundColor: isActive("/dashboard/listarLoja") ? '#829893' : 'transparent' }}>
                                <DynamicForm className="sidebarIcon" />
                                Loja
                            </li>
                        </Link>
                        <Link to="/dashboard/listarTestemunhos" className={`link ${isActive("/dashboard/listarTestemunhos") && "active"}`}>
                            <li className="sidebarListItem" style={{ backgroundColor: isActive("/dashboard/listarTestemunhos") ? '#829893' : 'transparent' }}>
                                <Work className="sidebarIcon" />
                                Testemunhos
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Administradores</h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard/listarUsers" className={`link ${isActive("/dashboard/listarUsers") && "active"}`}>
                            <li className="sidebarListItem" style={{ backgroundColor: isActive("/dashboard/listarUsers") ? '#829893' : 'transparent' }}>
                                <VerifiedUser className="sidebarIcon" />
                                Utilizadores
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}