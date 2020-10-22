import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'


function Portada(){

return(
    <div className=" bgImg ">
    <div className="opacity50">
<Container className="sectionSpace" id="home">
<Row className="centerDiv">
  
    <Col className="order-sm-1"  sm={12}>
<div  className="align-self-center mr-2 text-center">
      <h2>¿Quieres hacer una página web para tu negocio?</h2>
          <h1> ¡Nosotros te ayudamos! </h1>
            <Button className="btnStyle" href="#quienesSomos" size="lg">Quienes Somos</Button>
    </div>
    </Col>

<Col className="order-sm-0" md={6} >
        <img className="imgProps" src="logo_250w.png"></img>
</Col>


</Row>
</Container>
</div>
</div>
)

}

export default Portada;