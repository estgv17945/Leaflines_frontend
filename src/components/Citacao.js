import React, { } from "react"

function Citacao() {
  return (
    <div>
      <section id="citacao">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <img src="/imagens/Aspas.png" alt="img1" class="img1" height={100} />
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A arte é uma atividade humana que consiste em que uma pessoa conscientemente, por meio de
                  certos
                  sinais externos, transmite aos outros sentimentos que experimentou, e outras pessoas são
                  afetadas por esses sentimentos e os revivem em si mesmas.
                </p>
                <br />
                <img src="/imagens/Aspas.png" alt="img2" class="float-end img2" height={100} />
                <h5>
                  <img decoding="async" loading="lazy" width={80} height={6} style={{ width: 80 }} img src="/imagens/Linha.png" alt="ImagemLinha" class="ImagemLinha" />
                  Tolstoy
                </h5>
              </div>
            </div>
            <div className="col-6 citacao">
              <img src="/imagens/Citacao.png" alt="imagemCitacao" className="rounded float-end" />
            </div>
            <div>
              <p className="p2 float-end">
                PROCESSO DE RETRATO A PRETO E BRANCO
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Citacao