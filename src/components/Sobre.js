import React from "react";

function Sobre() {
    return (
        <div>
            <section id="sobre">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img src="/imagens/EuSobre.jpg" alt="imagemSobre" className="rounded float-start" />
                            </div>
                            <div className="col-8">
                                <h1>
                                    <img src="/imagens/Linha.png" alt="ImagemLinha" class="ImagemLinha" />
                                    Sobre
                                </h1>
                                <br />
                                <p>
                                    O desenho faz parte da minha vida desde que me lembro, era com ele que ocupava o meu tempo
                                    sempre que estava aborrecida ou mesmo quando apenas não sabia o que fazer. Como eu não gostava
                                    de ver televisão nem de jogar no telemóvel, pegava numa caneta e num pedaço de papel e começava
                                    a imitar qualquer objeto estático que estivesse à minha volta.
                                    Conforme os anos foram passando também fui ganhando mais experiência e aperfeiçoei a minha
                                    técnica de desenho, então, há uns meses decidi começar a introduzir este hobbie na minha parte
                                    profissional.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Sobre