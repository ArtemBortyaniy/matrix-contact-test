import React from "react";
import Background from "../../images/matrix-telephone.jpg";
import { Wrapper, Title, Text, Cursor } from "./Welcome.styled";

const styles = {
  container: {
    backgroundImage: `url(${Background})`,
  },
};

const Welcome: React.FC = () => {
  return (
    <Wrapper style={styles.container}>
      <Title>
        <Text>Welcome to</Text>
        <Text>
          the phonebook...
          <Cursor>|</Cursor>
        </Text>
      </Title>
    </Wrapper>
  );
};

export default Welcome;
