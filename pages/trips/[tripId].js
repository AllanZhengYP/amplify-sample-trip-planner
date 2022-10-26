import ItineraryContainer from "../../components/ItineraryContainer";
import ActivityCard from "../../components/ActivityCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { API, DataStore, graphqlOperation } from "aws-amplify";

import { Itinarary } from "../../src/models"
import * as queries from "../../src/graphql/queries"

const Trip = () => {
  const { tripId }= useRouter().query;
  useEffect(() => {
    // alert(tripId);
    // const query = async () => {
    //   const res = await API.graphql(graphqlOperation(queries.getItinarary, {id: "mock-id-2"}));
    //   alert(res.data.getItinarary)
    // }
    // query();
    // return () => {}
    const query = async () => {
      const itin = await DataStore.query(Itinarary);
      alert(JSON.stringify(itin));
    }
    query();
    // const tripSubscription = DataStore.observeQuery(
    //   Itinarary, i => i.id("eq", "mock-id")
    // ).subscribe(msg => {
    //   alert(msg.items?.length);
    // })
    return () => {
      // tripSubscription.unsubscribe();
    }
  }, []);
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