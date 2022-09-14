import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import styles from "./ItineraryContainer.module.css";

/**
 * @typedef {Object} ItineraryContainer
 * @props {string} destination
 * @props {Date} startDate
 * @props {Date} endDate
 *
 * @param {ItineraryContainer} props
 */
const ItineraryContainer = (props) => {
  const getDateString = (date) => {
    const weekday = date.toLocaleDateString("en-US", {weekday: "short"});
    const month = date.toLocaleDateString("en-US", {month: "short"});
    const day = date.getDate();
    return <Box sx={{display: "inline"}}>{weekday}, {month} {day}</Box>;
  };
  return <Container maxWidth="lg">
    <Box className={styles.box__itineraryHeader}>
      <Box className={styles.box__itineraryDestination}>
        <h2 className={styles.box__itineraryDestination}>{props.destination}</h2>
        <Box>{getDateString(props.startDate)} - {getDateString(props.endDate)}</Box>
      </Box>
      <Box className={styles.box__itineraryTraveler}>
        <div>Traveler</div>
        <div>Allan Zheng</div>
      </Box>
    </Box>
    <Box>
    {props.children}
    </Box>
  </Container>
}

export default ItineraryContainer;