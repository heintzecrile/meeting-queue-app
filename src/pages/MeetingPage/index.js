import { useState } from "react";
import styled from "styled-components";

import Text from "components/Text";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FlexBox from "components/FlexBox";
import Button from "components/Button";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Slide from "@material-ui/core/Slide";
import randomList, { az, za } from "photos";
import WinnnerFrame from "images/Winner.png";
import { useLocation } from "react-router";
import Reset from "icons/Reset";
import Confetti from "react-confetti";

const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 25em;
  height: 30em;
`;

const ResetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 0em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const MainImage = styled.img`
  pointer-events: none;
  object-fit: cover;
  object-position: 8.7% 0%;
  height: 18em;
  width: 18em;
  margin-left: 3.3em;
  margin-top: 2em;
  border-radius: 100%;
  background-color: #eaeaea;
  align-self: center;
`;

const SmallImage = styled.img`
  object-fit: cover;
  object-position: 8.7% 0%;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-top: 2em;
  border-radius: 100%;
  background-color: #eaeaea;
  align-self: center;
  border: 3px solid #ffffff;
  background-color: #ffffff;
  margin: 13px;
  opacity: ${(props) => (props.fade ? 0.5 : 1)};
  transition: opacity 500ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default function WelcomePage() {
  const location = useLocation();
  const { state } = location;
  const withWinner = true;

  const getSorting = () => {
    const sorting = state && state.sort;
    switch (sorting) {
      case 0:
        return randomList;
      case 1:
        return az;
      case 2:
        return za;
      default:
        return randomList;
    }
  };

  const [waitlist, setWaitList] = useState(
    getSorting().slice(1, randomList.length)
  );
  const [current, setCurrent] = useState(randomList[0]);
  const [completedList, setCompletedList] = useState([]);

  const handleBackClick = () => {
    if (completedList.length === 0) return;
    if (current) {
      waitlist.unshift(current);
      setCurrent(null);
    }
    if (completedList.length > 0) {
      const moved = completedList.shift();
      setCurrent(moved);
    }
  };
  const handleNextClick = () => {
    if (waitlist.length === 0) return;
    const moved = waitlist.shift();
    if (current) {
      completedList.unshift(current);
    }
    setCurrent(moved);
  };

  const handleResetClick = () => {
    setWaitList(getSorting().slice(1, randomList.length));
    setCurrent(randomList[0]);
    setCompletedList([]);
  };

  return (
    <>
      {withWinner && current.isWinner && <Confetti />}
      <div
        style={{
          // main photo background
          backgroundImage: "linear-gradient(95deg, #282460 48%, #FFFFFF 48%)",
          marginTop: 10,
          height: "93vh",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Slide
                direction="right"
                timeout={800}
                in
                mountOnEnter
                unmountOnExit
              >
                <FlexBox
                  justifyContent="space-between"
                  minHeight={550}
                  flexDirection="column"
                  padding="10% 30% 0% 0%"
                  width="70%"
                >
                  <Text color="#FFFFFF" fontWeight={350} customSize={50}>
                    {withWinner && current.isWinner ? "Winner" : "Presenter"}
                  </Text>
                  <br />
                  <Card elevation={4}>
                    {withWinner && current.isWinner && (
                      <img
                        src={WinnnerFrame}
                        alt="winnner-frame"
                        style={{ position: "absolute" }}
                      />
                    )}
                    <FlexBox
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <div
                        style={{
                          height: "22em",
                          width: "25em",
                        }}
                      >
                        {current && (
                          <MainImage
                            src={current && current.image}
                            alt="current-presenter"
                          />
                        )}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#8578bd",
                          width: "25em",
                          textAlign: "center",
                          height: "9em",
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                        }}
                      >
                        <br />
                        <br />
                        <Text color="#FFFFFF" fontSize="xl">
                          {current && current.content}
                        </Text>
                        <div style={{ height: "0.5em" }} />
                        <Text
                          color="#FFFFFF"
                          fontSize="sm"
                          textTransform="uppercase"
                          fontWeight={350}
                        >
                          {current && current.team}
                        </Text>
                      </div>
                    </FlexBox>
                  </Card>
                  <br />
                  <br />
                  <div style={{ marginLeft: -20 }}>
                    <FlexBox
                      width="93%"
                      justifyContent="space-between"
                      minHeight={50}
                    >
                      <Button
                        startIcon={<ChevronLeft style={{ fontSize: 30 }} />}
                        variant="outlined"
                        onClick={handleBackClick}
                        border="1px solid #FFFFFF"
                      >
                        <Text fontWeight="bold" color="#FFFFFF" fontSize="md">
                          BACK
                        </Text>
                      </Button>
                      <Button
                        endIcon={<ChevronRight style={{ fontSize: 30 }} />}
                        variant="outlined"
                        onClick={handleNextClick}
                        border="1px solid #FFFFFF"
                      >
                        <Text fontWeight="bold" color="#FFFFFF" fontSize="md">
                          NEXT
                        </Text>
                      </Button>
                    </FlexBox>
                  </div>
                </FlexBox>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <FlexBox
                minHeight={500}
                flexDirection="column"
                padding="24% 0% 0% 0%"
              >
                <Slide
                  direction="left"
                  timeout={800}
                  in
                  mountOnEnter
                  unmountOnExit
                >
                  <div
                    style={{
                      width: "100%",
                      height: "14em",
                      borderRadius: 10,
                      backgroundColor: "#8578bd",
                      marginBottom: "3em",
                    }}
                  >
                    <FlexBox flexDirection="column" padding="20px 30px">
                      <Text fontSize="lg" color="#FFFFFF">
                        Upcoming Presenters
                      </Text>
                      <div
                        style={{
                          height: "160px",
                          marginRight: 40,
                          marginLeft: -20,
                          display: "flex",
                          flexDirection: "row",
                          overflowX: "scroll",
                        }}
                      >
                        {waitlist.map((a) => (
                          <SmallImage
                            key={a.content}
                            src={a.image}
                            alt="face"
                          />
                        ))}
                      </div>
                    </FlexBox>
                  </div>
                </Slide>

                <Slide
                  direction="left"
                  timeout={800}
                  in
                  mountOnEnter
                  unmountOnExit
                >
                  <div
                    style={{
                      width: "100%",
                      height: "14em",
                      borderRadius: 10,
                      backgroundColor: "#F4F5FA",
                    }}
                  >
                    <FlexBox flexDirection="column" padding="20px 30px">
                      <FlexBox alignItems="center">
                        <Text fontSize="lg" color="#393A6D" fontWeight="bold">
                          Completed
                        </Text>
                        <div
                          style={{
                            borderRadius: 20,
                            padding: "4px 11px",
                            marginLeft: "10px",
                            background: "#7580BD",
                            marginTop: 0,
                          }}
                        >
                          <Text fontSize="xs" color="#FFFFFF">
                            {completedList.length} / {randomList.length}
                          </Text>
                        </div>
                      </FlexBox>
                      <div
                        style={{
                          height: "160px",
                          marginRight: 40,
                          marginLeft: -20,
                          display: "flex",
                          flexDirection: "row",
                          overflowX: "scroll",
                        }}
                      >
                        {completedList.map((a) => (
                          <SmallImage
                            key={a.content}
                            fade
                            src={a.image}
                            alt="face"
                          />
                        ))}
                      </div>
                    </FlexBox>
                    <FlexBox justifyContent="flex-end">
                      <ResetButton onClick={handleResetClick}>
                        <Reset />
                        <div style={{ width: "0.5em" }} />
                        <Text>Reset</Text>
                      </ResetButton>
                    </FlexBox>
                  </div>
                </Slide>
              </FlexBox>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
