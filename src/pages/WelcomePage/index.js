import { useState, useEffect } from "react";
import Text from "components/Text";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import MainPicture from "icons/MainPicture";
import Slide from "@material-ui/core/Slide";
import FlexBox from "components/FlexBox";
import Shuffle from "icons/Shuffle";
import AscendSort from "icons/AscendSort";
import DescendSort from "icons/DescendSort";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Button from "components/Button";
import dayjs from "dayjs";

export default function WelcomePage() {
  const [isShown, setIsShown] = useState(true);
  const [sortBy, setSortBy] = useState(0);
  const [time, setTime] = useState(dayjs());
  const history = useHistory();

  useEffect(() => {
    const intervalId = setInterval(() => setTime(dayjs(), 1000));
    return () => clearInterval(intervalId);
  }, []);

  const getGreeting = () => {
    const hours = time.format("HH");
    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div
      style={{
        backgroundImage: isShown
          ? "linear-gradient(95deg, #FFFFFF 48%, #F4F5FA 48%)"
          : "linear-gradient(95deg, #393A6D 48%, #FFFFFF 48%)",
        marginTop: 0,
        height: "93vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Slide
              direction="right"
              timeout={800}
              in={isShown}
              mountOnEnter
              unmountOnExit
            >
              <FlexBox
                justifyContent="space-between"
                minHeight={550}
                flexDirection="column"
                padding="15% 10% 0% 0%"
              >
                <div>
                  <Text
                    fontWeight={350}
                    customSize={50}
                    color={!isShown && "#FFFFFF"}
                  >
                    {getGreeting()}
                  </Text>
                  <br />
                  <Text
                    fontWeight="bold"
                    fontSize="sm"
                    color={!isShown && "#FFFFFF"}
                  >
                    {time.format("dddd, DD MMMM YYYY, HH:mm:ss")}
                  </Text>
                </div>
                <MainPicture size={"85%"} />
              </FlexBox>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide
              direction="left"
              timeout={800}
              in={isShown}
              mountOnEnter
              unmountOnExit
            >
              <FlexBox
                minHeight={500}
                flexDirection="column"
                padding="45% 0% 0% 10%"
              >
                <div>
                  <Text fontWeight="bold" fontSize="sm">
                    How would you like to sort your presenters today?
                  </Text>
                  <br />
                  <FlexBox minHeight={50}>
                    <Button
                      startIcon={
                        <Shuffle color={sortBy === 0 ? "#FFFFFF" : "#393A6D"} />
                      }
                      size="large"
                      selected={sortBy === 0}
                      onClick={() => setSortBy(0)}
                    >
                      <Text
                        fontWeight="bold"
                        color={sortBy === 0 ? "#FFFFFF" : "#393A6D"}
                        fontSize="sm"
                      >
                        RANDOM
                      </Text>
                    </Button>
                    <div style={{ width: 10 }} />
                    <Button
                      startIcon={
                        <AscendSort
                          color={sortBy === 1 ? "#FFFFFF" : "#393A6D"}
                        />
                      }
                      selected={sortBy === 1}
                      size="large"
                      variant={sortBy === 1 ? "contained" : "outlined"}
                      onClick={() => setSortBy(1)}
                    >
                      <Text
                        color={sortBy === 1 ? "#FFFFFF" : "#393A6D"}
                        fontWeight="bold"
                        fontSize="sm"
                      >
                        A TO Z
                      </Text>
                    </Button>
                    <div style={{ width: 10 }} />
                    <Button
                      startIcon={
                        <DescendSort
                          color={sortBy === 2 ? "#FFFFFF" : "#393A6D"}
                        />
                      }
                      selected={sortBy === 2}
                      size="large"
                      variant={sortBy === 2 ? "contained" : "outlined"}
                      onClick={() => setSortBy(2)}
                    >
                      <Text
                        color={sortBy === 2 ? "#FFFFFF" : "#393A6D"}
                        fontWeight="bold"
                        fontSize="sm"
                      >
                        Z TO A
                      </Text>
                    </Button>
                  </FlexBox>
                  <br />
                  <br />
                  <FlexBox minHeight={50}>
                    <Button
                      onClick={() => {
                        setIsShown(false);
                        setTimeout(
                          () =>
                            history.push({
                              pathname: "/start",
                              state: { sort: sortBy },
                            }),
                          1000
                        );
                      }}
                      size="large"
                      selected
                      endIcon={
                        <ChevronRight
                          style={{ fontSize: 30, marginLeft: -10 }}
                        />
                      }
                    >
                      <Text color="#ffffff" fontSize="sm" fontWeight="bold">
                        START MEETING
                      </Text>
                    </Button>
                  </FlexBox>
                </div>
              </FlexBox>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
