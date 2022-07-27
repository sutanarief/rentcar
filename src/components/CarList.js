import React from 'react'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'
import CustomCard from './CustomCard'

const CarList = () => {
  const carList = [
    {
      title: "TOYOTA AGYA",
      text: "Harga Mulai Rp. 450.000",
      img: "https://cdn.imgbin.com/13/4/1/imgbin-daihatsu-ayla-toyota-agya-car-indonesia-toyota-WckQV4wYtd5Tx0n2hb1334GTC.jpg",
      style: {},
      button: true
    },
    {
      title: "TOYOTA AGYA",
      text: "Harga Mulai Rp. 450.000",
      img: "https://cdn.imgbin.com/13/4/1/imgbin-daihatsu-ayla-toyota-agya-car-indonesia-toyota-WckQV4wYtd5Tx0n2hb1334GTC.jpg",
      style: {},
      button: true
    },
    {
      title: "TOYOTA AGYA",
      text: "Harga Mulai Rp. 450.000",
      img: "https://cdn.imgbin.com/13/4/1/imgbin-daihatsu-ayla-toyota-agya-car-indonesia-toyota-WckQV4wYtd5Tx0n2hb1334GTC.jpg",
      style: {},
      button: true
    }
  ]
  return (
    <>
      <Container className='py-4'>
        <Col>
          <Row>
            <Col className='d-flex justify-content-center my-3'>
              <h1>Pilihan Mobil Berkualitas</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <Row>
              {carList.map((x) => (
                <Col>
                  <CustomCard data={x}/>
                </Col>
              ))}
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
              <Button style={{width: '30%'}}>
                Lihat Pilihan Mobil Lainnya
              </Button>
            </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default CarList