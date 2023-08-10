import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function CriarTestemunhos() {
  const navigate = useNavigate()
  const [campNome, setcampNome] = useState("")
  const [campTestemunho, setcampTestemunho] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)
  const [message, setMessage] = useState("")
  const [alertType, setAlertType] = useState("")

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
    previewFile(file)
  };

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const SendSave = () => {
    if (campNome === "") {
      setMessage("Insira um nome!")
      setAlertType("danger")
    } else if (campTestemunho === "") {
      setMessage("Insira um testemunho!")
      setAlertType("danger")
    } else if (selectedFile === null) {
      setMessage("Selecione uma foto!")
      setAlertType("danger")
    } else {
      const baseUrl = "http://localhost:3000/testemunho/create"
      const formData = new FormData()
      formData.append("nome", campNome)
      formData.append("descricao", campTestemunho)
      formData.append("foto", selectedFile)

      axios.post(baseUrl, formData)
        .then(response => {
          console.log(response.data)
          if (response.data.success === true) {
            setMessage(response.data.message)
            setAlertType("success")
          } else {
            setMessage(response.data.message)
            setAlertType("danger")
          }
        }).catch(error => {
          setMessage("Algo correu mal!")
          setAlertType("danger")
        })
    }
  }


  useEffect(() => {
    let timeout;

    if (alertType === 'success') {
      timeout = setTimeout(() => {
        setMessage('');
        setAlertType('');
        navigate('/dashboard/listarTestemunho');
      }, 2000);
    }

    return () => clearTimeout(timeout)
  }, [alertType, navigate])

  return (
    <div className="containerCE m-5">
      <div className="row">
        <div className="col-md-6">
          <div className="form-row justify-content-center">
            <div className='dashboardTitulos mb-3'><h2>Criar testemunho</h2></div>
            <div className="form-group col-md-12 mb-4">
              <label htmlFor="inputNome" className="visually-hidden">Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                value={campNome}
                onChange={event => setcampNome(event.target.value)}/>
            </div>
            <div className="form-group col-md-12 mb-4">
              <label htmlFor="inputTestemunho" className="visually-hidden">Descrição</label>
              <input
                type="text"
                className="form-control"
                placeholder="Testemunho"
                value={campTestemunho}
                onChange={event => setcampTestemunho(event.target.value)}/>
            </div>
            <div className="form-group col-md-12 mb-4">
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
            className="btn btn-outline-light btn-lg btn-block"
            onClick={SendSave}>
            Adicionar testemunho
          </button>
          {message && (
            <div className={`alert alert-${alertType} mt-5`} role="alert">
              {message}
            </div>
          )}
        </div>
        <div className="col-md-6">
          {previewSource && (
            <img src={previewSource} alt="chosen" className="rounded" style={{ width: '300px', height: 'auto' }} />
          )}
        </div>
      </div>
    </div>
  );
}