import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum ActivitTypes {
  FLIGHT = "FLIGHT",
  HOTEL = "HOTEL",
  CAR_RENTAL = "CAR_RENTAL",
  CUSTOM = "CUSTOM"
}

type ActivityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItinararyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Activity {
  readonly id: string;
  readonly startTime: string;
  readonly endTime?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly type: ActivitTypes | keyof typeof ActivitTypes;
  readonly location?: string | null;
  readonly confirmation?: string | null;
  readonly itinararyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Activity, ActivityMetaData>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity, ActivityMetaData>) => MutableModel<Activity, ActivityMetaData> | void): Activity;
}

export declare class User {
  readonly id: string;
  readonly preferredName?: string | null;
  readonly company?: string | null;
  readonly plannedItins?: (Itinarary | null)[] | null;
  readonly viewItins?: (Itinarary | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Itinarary {
  readonly id: string;
  readonly destinationCity: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly Activities?: (Activity | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Itinarary, ItinararyMetaData>);
  static copyOf(source: Itinarary, mutator: (draft: MutableModel<Itinarary, ItinararyMetaData>) => MutableModel<Itinarary, ItinararyMetaData> | void): Itinarary;
}