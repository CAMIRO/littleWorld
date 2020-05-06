import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../containers/language";
import styled from "styled-components";
import { Form, Row, Col } from 'react-bootstrap'

const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id === event.target.value
    );
    // set selected language by calling context method
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <Wrapper>
      <Form.Row>
        <Col md={{ span: 2, offset: 9 }}>
          <Form.Group>
            <Form.Control as={Col} size="sm" as="select" onChange={handleLanguageChange} value={languageContext.language.id}>
              {languageOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.text}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
    </Wrapper>
  );
}
export default LanguageSelector

const Wrapper = styled.div`
 min-height: 30px;
 padding: 20px 0;
`;

