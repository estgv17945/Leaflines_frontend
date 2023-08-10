import React from "react";

const Mensagem = () => {
    return (
        <div>
            <section id="mensagem">
                <div className="container">
                    <div className="row">
                        <div className="col-12 section-intro">
                            <hr className="hline" />
                        </div>
                        <div className="row">
                             <div className="col-lg-4 col-sm-4">
                                <h1>
                                    Rapidez
                                </h1>
                                <p>
                                    O prazo normal de execução são 10 dias
                                </p>
                            </div>
                             <div className="col-lg-4 col-sm-4">
                                <h1>
                                    Descontos
                                </h1>
                                <p>
                                    Deixe feedback e receba um desconto na próxima encomenda
                                </p>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <h1>
                                    Vales de Oferta
                                </h1>
                                <p>
                                    Ofereça um vale de oferta com um texto escrito por si
                                </p>
                            </div>
                        </div>
                        <div className="col-12 section-intro2">
                            <hr className="hline" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Mensagem