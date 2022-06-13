import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            HEY PEEPS !!! I am{" "}
            <span className="purple">RAKSHITH KALAPALA </span>
            from <span className="purple"> Vijayawada , India.</span>
            <br />I am full stack developer living in
            <span className="purple"> SANTA MONICA, CALIFORNIA</span>
            <br />
            <br />
            Besides Coding, I love to :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Soccer <i class="cid-soccer"></i>
            </li>
            <li className="about-activity">
              <ImPointRight /> Read (literally anything, must be self-dev boom
              though)
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> EAT !!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Finding purpose in everything and striving for greatness "
          </p>
          <footer className="blockquote-footer">Rakshith </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
