/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!, $startTime: AWSDateTime!) {
    getActivity(id: $id, startTime: $startTime) {
      id
      startTime
      endTime
      name
      description
      type
      location
      confirmation
      itinarary {
        id
        destinationCity
        name
        description
        startDate
        endDate
        Activities {
          nextToken
        }
        createdAt
        updatedAt
        userPlannedItinsId
      }
      createdAt
      updatedAt
      itinararyActivitiesId
      itinararyActivitiesStartDate
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $id: ID
    $startTime: ModelStringKeyConditionInput
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActivities(
      id: $id
      startTime: $startTime
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        startTime
        endTime
        name
        description
        type
        location
        confirmation
        itinarary {
          id
          destinationCity
          name
          description
          startDate
          endDate
          createdAt
          updatedAt
          userPlannedItinsId
        }
        createdAt
        updatedAt
        itinararyActivitiesId
        itinararyActivitiesStartDate
      }
      nextToken
    }
  }
`;
export const getItinarary = /* GraphQL */ `
  query GetItinarary($id: ID!, $startDate: AWSDate!) {
    getItinarary(id: $id, startDate: $startDate) {
      id
      destinationCity
      name
      description
      startDate
      endDate
      Activities {
        items {
          id
          startTime
          endTime
          name
          description
          type
          location
          confirmation
          createdAt
          updatedAt
          itinararyActivitiesId
          itinararyActivitiesStartDate
        }
        nextToken
      }
      createdAt
      updatedAt
      userPlannedItinsId
    }
  }
`;
export const listItinararies = /* GraphQL */ `
  query ListItinararies(
    $id: ID
    $startDate: ModelStringKeyConditionInput
    $filter: ModelItinararyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItinararies(
      id: $id
      startDate: $startDate
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        destinationCity
        name
        description
        startDate
        endDate
        Activities {
          nextToken
        }
        createdAt
        updatedAt
        userPlannedItinsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      preferredName
      company
      plannedItins {
        items {
          id
          destinationCity
          name
          description
          startDate
          endDate
          createdAt
          updatedAt
          userPlannedItinsId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        preferredName
        company
        plannedItins {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
