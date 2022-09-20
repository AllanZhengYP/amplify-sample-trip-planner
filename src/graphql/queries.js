/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      startTime
      endTime
      name
      description
      type
      location
      confirmation
      itinararyID
      createdAt
      updatedAt
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startTime
        endTime
        name
        description
        type
        location
        confirmation
        itinararyID
        createdAt
        updatedAt
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
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      viewItins {
        items {
          id
          destinationCity
          name
          description
          startDate
          endDate
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        viewItins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItinarary = /* GraphQL */ `
  query GetItinarary($id: ID!) {
    getItinarary(id: $id) {
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
          itinararyID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listItinararies = /* GraphQL */ `
  query ListItinararies(
    $filter: ModelItinararyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItinararies(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
