import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../containers/language";
import styled from "styled-components";
import { Row, Col } from 'react-bootstrap';

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
    <Row>

      <Col md={{ span: 4, offset: 4 }}>
        <button value={'ch'} onClick={handleLanguageChange}>中文</button>
        <button value={'en'} onClick={handleLanguageChange}>English</button>
      </Col>
    </Row>
  );
}
export default LanguageSelector

const Wrapper = styled.div`
  display: flex;
  min-height: 50px;
  padding: 10px;
  
`;

