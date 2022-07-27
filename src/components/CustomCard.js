import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap'

const CustomCard = (props) => {
  return (
    <Card
      style={{
        width: '18rem',
        border: "none",
        backgroundColor: '#f5f4f2',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
        {props.data && (
            <img 
              alt='Car in the house'
              width={props.data?.width || '100%'}
              height={props.data?.height || '100%'}
              className='align-self-center'
              style={props.data?.style || ""}
              src={props.data?.img || ""}
            />
        )}
      <CardBody>
        <CardTitle tag="h5" className='mb-3'>
          {props.data?.title || ""}
        </CardTitle>
        <CardText>
          {props.data?.text || ""}
        </CardText>
        {props.data.button && (
          <Button>
            Order
          </Button>
        )}
      </CardBody>
    </Card>
  )
}

export default CustomCard