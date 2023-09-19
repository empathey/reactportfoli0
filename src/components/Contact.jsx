import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
text-align: center;

@media only screen and (max-width: 768px) {
  align-items: center;
  text-align: center;
}
`;

const Title = styled.h1`
  font-size: 40px;
  color: #FF0000;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
{/*
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;
*/}
const Button = styled.button`
  background-color: #FF0000;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
{/*
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        ref.current,
        "public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us </Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message // This doesn't do anything yet"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "This has not been implemented yet :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};
*/}


const Contact = () => {
  
  
  
  return (
    <Section>
      <Container>
        <Left>
        <Title>Contact Me.</Title>
          <Desc>
          Located right here in Chicago, you can contact me any time.
          <br /> Email: cszewczul@mail.roosevelt.edu
          <br /> Phone Number: (630)7460996 
          <br /> Thank you for your interest
          </Desc>
          
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};
export default Contact;
