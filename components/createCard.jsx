import React from "react";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
     /*  id={contact.id}
      key={contact.id} */
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default createCard;
