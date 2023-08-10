import React, { useEffect } from "react"

import Navbar from "../../../components/Navbar"
import Inicio from "../../../components/Inicio";
import Sobre from "../../../components/Sobre"
import Mensagem from "../../../components/Mensagem"
import Loja from "../../../components/Loja"
import Citacao from "../../../components/Citacao"
import Portfolio from "../../../components/Portfolio"
import Testemunhos from "../../../components/Testemunhos"
import Footer from "../../../components/Footer"


function Home () {
  useEffect(()=>{
    document.title='LeafLines'
})

  return (
    <>
      <Navbar/>
      <Inicio/>
      <Sobre/>
      <Mensagem/>
      <Loja/>
      <Citacao/>
      <Portfolio/>
      <Testemunhos/>
      <Footer/>

    </>
  )
}

export { Home }