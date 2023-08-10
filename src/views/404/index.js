import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Link } from 'react-router-dom'

function PageNotFound() {
    useEffect(() => {
        document.title = 'Página não encontrada'
    }, [])


    return (
        <>
            <Navbar />
            <section id="pageNotFound">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center row">
                        <div className="col-lg-12">
                            <p className="fs-3">
                                <span className="dashboardTitulos">Ops! A página que procura ainda não foi desenhada!</span>
                            </p>
                            <Link to="/" className="btn btn-outline-light btn-lg btn-block">
                                Voltar ao Início
                            </Link>
                        </div>
                        <div className="col-md-12">
                            <img src="/imagens/404page2.jpg" alt="404" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PageNotFound;