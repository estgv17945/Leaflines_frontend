import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const baseUrl = "http://localhost:3000/";

export default function EditarLoja() {
  const navigate = useNavigate();
  const [dataLoja, setdataLoja] = useState("");
  const [campTitulo, setcampTitulo] = useState("");
  const [campDescricao, setcampDescricao] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState({ success: null, text: "" });
  const [alertType, setAlertType] = useState("");
  const {lojaId} = useParams();

  useEffect(() => {
    const fetchData = async () => {

        try {
        const lojaUrl = baseUrl + "/loja/" + lojaId;

        const [lojaResponse] = await Promise.all([
          axios.get(lojaUrl),
        ]);

        const lojaData = lojaResponse.data;

        if (lojaData.success) {
          const loja = lojaData.data[0];
          setdataLoja(loja);
          setcampTitulo(loja.titulo);
          setcampDescricao(loja.descricao);
        } else {
          alert("Algo correu mal!");
        }

      } catch (error) {
        alert("Error server: " + error);
      }
    };

    fetchData();
  }, [lojaId]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function SendUpdate() {

    const url = baseUrl + "/loja/update/" + lojaId;
    const formData = new FormData();
    formData.append("titulo", campTitulo);
    formData.append("descricao", campDescricao);

    if (selectedFile) {
      formData.append("imagem", selectedFile, selectedFile.name);
    }

    axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        if (response.data.success === true) {
          setMessage({ success: true, text: response.data.message });
          setAlertType("success");
        } else {
          setMessage({ success: false, text: "Error" });
          setAlertType("danger");
        }
      })
      .catch(error => {
        setMessage({ success: false, text: "Error: " + error });
        setAlertType("danger");
      });
  }

  useEffect(() => {
    let timeout;

    if (alertType === "success") {
      timeout = setTimeout(() => {
        navigate("/dashboard/listarLoja");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [alertType, navigate]);

  return (
    <div className="containerEE m-5">
      <div className="row">
        <div className="col-md-6">
          <div className="form-row justify-content-center">   
            <div className="form-group mb-4">
              <label htmlFor="inputTitulo" className="visually-hidden">Título</label>
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={campTitulo}
                onChange={event => setcampTitulo(event.target.value)}/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="inputDescricao" className="visually-hidden">Descrição</label>
              <input
                type="text"
                className="form-control"
                placeholder="Descrição"
                value={campDescricao}
                onChange={event => setcampDescricao(event.target.value)}/>
            </div>
            <div className="form-group  mb-4">
              <label htmlFor="inputImagem" className="visually-hidden">Imagem</label>
              <input
                type="file"
                className="form-control"
                id="inputImagem"
                accept=".jpg,.png,.jpeg"
                onChange={handleFileChange}/>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-light btn-lg btn-block mb-4"
            onClick={SendUpdate}>Atualizar tipo de desenho</button>
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
            <label htmlFor="inputImagem" className="visually-hidden">Imagem atual</label>
            {dataLoja.fotoId && <img src={`http://localhost:3000/midia/${dataLoja.fotoId}`} className="rounded" alt="imagem atual" style={{ width: '300px', height: 'auto' }} />}
          </div>
        </div>
      </div>
    </div>
  );
}