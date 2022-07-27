import React from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'

const style = {
  lineHeight: '32px'
}

const About = () => {
  return (
    <Container className='py-5'>
      <Row style={{borderBottom: '1px solid black'}} className="py-4">
        <Col>
          <h2>
            Rental Mobil Murah Hanya RentCarIn
          </h2>
          <p style={style}>
            Rental Mobil berikut supir handal Cuma di RentCarIn Anda membutuhkan jasa rental mobil murah? Sekarang tidak perlu bingung, anda bisa menghubungi kami untuk pemesanan rental mobil online.
          </p>
          <p style={style}>
            Sebagai agent rental mobil terpercaya, kami menyediakan beragam pilihan kendaraan berkualitas dengan harga hemat bersaing. Cepat dan Mudah memesan sewa mobil di RentCarIn dimanapun anda berada khususnya di wilayah kota Jakarta, Tangerang, Bekasi, Depok, Bogor.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About