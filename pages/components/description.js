import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



function Description (){

return(
<div>
<Container className="separacion-secciones">
    <Row >

       <Col md={{span: 3, offset: 2}}>
  <img src="recurso1.png" className="imgProps" alt="taza-img"></img>

       </Col>
        <Col md={{span: 5, offset: 1}}>



<div className="align-self-center container align-middle ">
      <h2>Sentémonos a conversar</h2>
      <p>Co-construyamos tu página web para que se adapte a lo que necesites.</p>
      <p>Ofrecemos un trabajo profesional y acorde a tus gustos. Realizaremos reuniones para entender sobre tu negocio, aspiraciones y gustos, para luego entregarte una propuesta que cumpla con tus expectativas </p>
</div>
        </Col>

    </Row>
       
       <Row > 
<Col md={{span: 5, offset: 1}} className= "order-0">
 
<div className="align-self-center container text-right">
             <h2>Un montón de ideas</h2>
      <p>Echemos a volar la imaginacion para que <strong>tu idea</strong> pueda concretarse en tu <strong>página web</strong></p>
      <p>Ofecemos un servicio profesional acorde a las necesidades de tu marca, para que podamos generar la mejor ventana hacia tus clientes.</p>
<Button className="btnStyle">Nuestros servicios</Button>
</div>
</Col>
  <Col md={{span:3, offset: 1}} className= "order-1">
             <img src="recurso2.png" className="imgProps" alt="taza-img"></img>

  </Col>  
   
 
    

      
    </Row>
</Container>

</div>

)
}


export default Description;