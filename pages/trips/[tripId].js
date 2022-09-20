import ItineraryContainer from "../../components/ItineraryContainer";
import ActivityCard from "../../components/ActivityCard";
import { useRouter } from "next/router";

const Trip = () => {
  const {tripId}= useRouter().query;
  // TODO: remove
  const activities = [{activity: "I am an activity"}];
  const destination = "Seattle";
  const startDate = new Date("2022-06-19");
  const endDate = new Date("2022-06-21");

  return <ItineraryContainer destination={destination} startDate={startDate} endDate={endDate}>
    { activities.map(
      ({activity}, index) => <ActivityCard activity={activity} key={index}></ActivityCard>)}
  </ItineraryContainer>
}

export default Trip;