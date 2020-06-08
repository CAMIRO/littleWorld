import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../containers/language";
import styled from "styled-components";
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const LanguageSelector = () => {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (event: any) => {
        const selectedLanguage = languageOptions.find(
            (item) => item.id === event
        );
        // set selected language by calling context method
        //languageContext.setLanguage(selectedLanguage);
    };

    return (
        <Wrapper>
            <ToggleButtonGroup name="options" type="radio" defaultValue={"ch"} onChange={handleLanguageChange} >
                <ToggleButton type="checkbox" name="radio" value={"ch"}>
                    中文
        </ToggleButton>
                <ToggleButton type="checkbox" name="radio" value={"en"}>
                    English
        </ToggleButton>
            </ToggleButtonGroup>
        </Wrapper>
    );
}
export default LanguageSelector

const Wrapper = styled.div`
  display: flex;
  min-height: 50px;
  padding: 15px;
  flex-direction: row-reverse;
`;

