import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import API_BASE_URL from "../library/env";

function EachEvent({ event, onUpdateEvent, onDeleteEvent }) {
  // destructuring the event prop for easier access
  const {
    id,
    name,
    image,
    location,
    date,
    time,
    price,
    willAttend,
    description,
  } = event;

  function handleDelete() {
    fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteEvent(event));
  }

  // styling for button when clicked
  const background = willAttend ? "rgb(255 38 16)" : null;
  const color = willAttend ? "#000000" : null;

  // function to handle update of willAttend
  function updateAttend() {
    fetch(`${API_BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        willAttend: !willAttend,
      }),
    })
      .then((r) => r.json())
      .then((updatedEv) => onUpdateEvent(updatedEv));
  }

  return (
    <Card className="card-style">
      {/* <Image src={image} wrapped ui={true} /> */}
      <Link
        to={`attendance/${id}`}
        className="rounded-top"
        style={{
          height: 240,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
        }}
      ></Link>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{location}</Card.Meta>
        <Card.Description>{description}</Card.Description>
        <br />
        <Card.Description>
          {date} | {time}
          <br />
          <p className="money-bill">
            <Icon name="money bill alternate" />
            {price}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Button
            primary
            style={{
              color: color,
              background: background,
            }}
            onClick={updateAttend}
          >
            <Icon name={willAttend ? "paper plane outline" : "time"} />
            {willAttend ? "RSVP'd" : "Attend"}
          </Button>
          <Button secondary onClick={handleDelete}>
            <Icon name="delete calendar" />
            Delete
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
}

export default EachEvent;
