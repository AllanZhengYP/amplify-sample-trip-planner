// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ActivitTypes = {
  "FLIGHT": "FLIGHT",
  "HOTEL": "HOTEL",
  "CAR_RENTAL": "CAR_RENTAL",
  "CUSTOM": "CUSTOM"
};

const { Activity, User, Itinarary } = initSchema(schema);

export {
  Activity,
  User,
  Itinarary,
  ActivitTypes
};