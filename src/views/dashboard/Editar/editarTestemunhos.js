import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://leaflines.onrender.com";

export default function EditarTestemunhos() {
  const navigate = useNavigate();
  const [dataTestemunhos, setdataTestemunhos] = useState("");
  const [campoNome, setcampNome] = useState("");
  const [campDescricao, setcampDescricao] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState({ success: null, text: "" });
  const [alertType, setAlertType] = useState("");
  const {testemunhosId} = useParams();

  useEffect(() => {
    const fetchData = async () => {

        try {
        const testemunhosUrl = baseUrl + "/testemunhos/" + testemunhosId;

        const [testemunhosResponse] = await Promise.all([
          axios.get(testemunhosUrl),
        ]);

        const testemunhosData = testemunhosResponse.data;

        if (testemunhosData.success) {
          const testemunhos = testemunhosData.data[0];
          setdataTestemunhos(testemunhos);
          setcampNome(testemunhos.nome);
          setcampDescricao(testemunhos.descricao);
        } else {
          alert("Algo correu mal!");
        }

      } catch (error) {
        alert("Error server: " + error);
      }
    };

    fetchData();
  }, [testemunhosId]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function SendUpdate() {

    const url = baseUrl + "/testemunhos/update/" + testemunhosId;
    const formData = new FormData();
    formData.append("nome", campoNome);
    formData.append("descricao", campDescricao);

    if (selectedFile) {
      formData.append("foto", selectedFile, selectedFile.name);
    }

    axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        if (response.data.success === true) {
          setMessage({ success: true, text: response.data.message })
          setAlertType("success")
        } else {
          setMessage({ success: false, text: "Error" })
          setAlertType("danger")
        }
      })
      .catch(error => {
        setMessage({ success: false, text: "Error: " + error });
        setAlertType("danger")
      })
  }

  useEffect(() => {
    let timeout

    if (alertType === "success") {
      timeout = setTimeout(() => {
        navigate("/dashboard/listarTestemunhos")
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [alertType, navigate])

  return (
    <div className="containerEE m-5">
      <div className="row">
        <div className="col-md-6">
          <div className="form-row justify-content-center">   
            <div className="form-group mb-4">
              <label htmlFor="inputTitulo" className="visually-hidden">Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                value={campoNome}
                onChange={event => setcampNome(event.target.value)}/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="inputTestemunho" className="visually-hidden">Testemunho</label>
              <input
                type="text"
                className="form-control"
                placeholder="Testemunho"
                value={campDescricao}
                onChange={event => setcampDescricao(event.target.value)}/>
            </div>
            <div className="form-group  mb-4">
              <label htmlFor="inputFoto" className="visually-hidden">Foto</label>
              <input
                type="file"
                className="form-control"
                id="inputFoto"
                accept=".jpg,.png,.jpeg"
                onChange={handleFileChange}/>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-light btn-lg btn-block mb-4"
            onClick={SendUpdate}>Atualizar testemunho</button>
          {message.text && (
            <div
              className={`alert mt-5 ${message.success ? "alert-success" : "alert-danger"}`}
              role="alert">
              {message.text}
            </div>
          )}
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="inputFoto" className="visually-hidden">Foto atual</label>
            {dataTestemunhos.fotoId && <img src={`http://localhost:3000/midia/${dataTestemunhos.fotoId}`} className="rounded" alt="foto atual" style={{ width: '300px', height: 'auto' }} />}
          </div>
        </div>
      </div>
    </div>
  )
}