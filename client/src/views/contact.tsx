import React, { useState } from "react";

import { Text } from "../containers/language";

export default function Contact() {
  return (
    <div>
      <h1>
        <Text tid="homeTab" />
      </h1>
      <p>
        <Text tid="welcomeDescription" />
      </p>
      >
      <a href="https://halilcanozcelik.com">
        <Text tid="aboutMe" />
      </a>
    </div>
  );
}
