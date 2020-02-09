import React, { useState } from "react";
import { Review, Container, Button } from "../styled/styled_content_edit";

const ContentEditText = () => {
  const [state, setState] = useState({
    isEditing: false,
    city: "Paris",
    from: "02.01.2020",
    until: "07.01.2020",
    personCount: "4"
  });

  const spanInfo = (
    <Review>
      <Container>
        <p>{state.city}</p>
        <p>{state.personCount}</p>
        <Button onClick={() => setState({ isEditing: !state.isEditing })}>
          Ubah
        </Button>
      </Container>
    </Review>
  );

  const editDiv = (
    <Review>
      <Container>Edit</Container>
    </Review>
  );

  return state.isEditing ? <>{editDiv}</> : <>{spanInfo} </>;
};

export default ContentEditText;
