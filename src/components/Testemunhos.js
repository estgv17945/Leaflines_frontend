import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { shuffle } from 'lodash'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier (.03, .98, 52, .99)",
}


function Testemunhos() {

  const [testemunhos, setTestemunhos] = useState([]);

  useEffect(() => {
    const fetchTestemunhos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/testemunhos');
        const data = response.data.data;
        setTestemunhos(shuffle(data));
      } catch (error) {
        console.log('Error fetching testemunhos:', error);
      }
    };

    fetchTestemunhos();
  }, []);

  return (

    <div className="container-fluid px-5 py-3 sobre marginFooter">
      <div className="text-start text-light mb-5"><h1 >Testemunhos</h1></div>
      <div className="row">

        {testemunhos.slice(0, 12).map(testemunho => (
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 col-mb-5" key={testemunho.id}>
            <Tilt options={defaultOptions}>
              <div className="card ">
                <img className="card-img-top" src={`http://localhost:3000/midia/${testemunhos.fotoId}`} alt={testemunho.nome} />
                <div className="card-body text-bg-dark">
                  <h5 className="card-title">{testemunho.nome}</h5>
                  <p>{testemunho.descricao}</p>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testemunhos;