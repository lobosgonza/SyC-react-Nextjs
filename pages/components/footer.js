import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Footer(){
return(
    <div className="bgOrangeClaro bgTexture">
<Container className="paddingTop">

<Row>
<Col>

<ul>
  <li><a href="#home">Inicio</a></li>
  <li><a href="#quienesSomos">Quienes Somos</a></li>
  <li><a href="#servicio">Servicios</a></li>
  <li><a href="#contacto">Contacto</a> </li>
</ul>
</Col>
<Col>
    
</Col>
<Col>
    <p>Simple y Creativo</p>
          <p>+569 659 610 86</p>
          <p>contacto@simpleycreativo.cl</p>
          <p>Santiago </p>
</Col>
</Row>
<Row>
    <Col className="text-center">
    <a href="#home">Top</a>
<p>Desarrollado Por Simple y Creativo</p>
    </Col>
</Row>

</Container>
</div>
)
}




export default Footer



