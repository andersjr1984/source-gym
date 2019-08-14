import React, {useState} from 'react';
import './Home.css';
import { Carousel, Tab, Tabs, Form, Button } from 'react-bootstrap';


export const Home = () => {
  return (
    <>
      <h1>The Source Gym</h1>
      <Images/>
      <Details/>
    </>
  )
}

const Images = () => {
  const areaImages = [
    {
      url: 'https://www.switchbacktravel.com/sites/default/files/images/landing-page/climbing%20%28header%29.jpg'
    },
    {
      url: 'https://www.switchbacktravel.com/sites/default/files/images/articles/Beginner%20Climbing%20Shoes%20%28header%29_0.jpg'
    },
    {
      url: 'https://d1vs4ggwgd7mlq.cloudfront.net/wp-content/uploads/2018/02/robert-baker-531539-unsplash-e1519072936677-934x563.jpg'
    }
  ]

  return (
    <Carousel interval={null} indicators={false}>
      {areaImages.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block"
              src={image.url}
              alt={`Slide ${index+1}`}
            />
            <Carousel.Caption>
              Image {index+1}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

const Details = () => {
  const [key, setKey] = useState('Events');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="Events" title="Events">
        Event calendar or news goes here!
      </Tab>
      <Tab eventKey="Location" title="Location">
        Address and stuff goes here!
      </Tab>
      <Tab eventKey="Contact" title="Contact Us">
        <ContactForm/>
      </Tab>
    </Tabs>
  )
}

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Form>
      <Form.Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" value={message} onChange={event => setMessage(event.target.value)} />
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  )
}