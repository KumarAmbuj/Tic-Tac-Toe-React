import React, { useState } from "react";
import {
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  Card,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import Icon from "./Icon";
import "./tictactoe.css";

let itemArray = new Array(9).fill("empty");
function TicTacToe() {
  const [isCross, setIsCross] = useState(true);
  const [message, setMessage] = useState("");
  // const notify = () => {
  //     toast("Default Notification !");
  //     toast.success("Success Notification !", {
  //         position: toast.POSITION.TOP_CENTER
  //       });
  // }

  function checkWinner() {
    const currentTurn = isCross ? "cross" : "circle";
    // if(itemArray[0] === currentTurn &&
    //   itemArray[1] === currentTurn &&
    //   itemArray[2] === currentTurn
    // )
    let isAnyWinner = false;

    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[8] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] != "empty"
    ) {
      isAnyWinner = true;
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] != "empty"
    ) {
      isAnyWinner = true;
    }
    //TODO: handle other 7 scenarios

    if (isAnyWinner) {
      setMessage(`Winner is ${currentTurn}`);
      return;
    }
    if (!itemArray.some((val) => val === "empty")) {
      setMessage("Draw");
      return;
    }
  }
  function changeItem(index) {
    if (message) {
      //TODO: place toast
      toast.error("Game Already Finished", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (itemArray[index] !== "empty") {
      toast.error("Block filled, try other one", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    itemArray[index] = isCross ? "cross" : "circle";
    if (checkWinner()) {
      //do some stuff
    }
    checkWinner();
    setIsCross(!isCross);
  }

  function resetTicTacToe() {
    itemArray = new Array(9).fill("empty");
    setIsCross(false);
    setMessage("");
  }
  return (
    <>
      <ToastContainer />
      <Container className="p-4">
        <Row>
          <Col md={6} sm={9} className="offset-md-3 offset-sm-1">
            <h1 className="center-align">TIC TAC TOE</h1>

            <h3 className="center-align">
              {message ? message : isCross ? "Cross's turn" : "Circle's turn"}
            </h3>

            {/* TODO: han */}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card
                  color="danger"
                  onClick={() => changeItem(index)}
                  key={index}
                >
                  <CardBody className="itemBox">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
            {message ? <Button onClick={resetTicTacToe}>Reset</Button> : <></>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TicTacToe;
