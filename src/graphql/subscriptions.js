/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
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
export const onCreateItinarary = /* GraphQL */ `
  subscription OnCreateItinarary(
    $filter: ModelSubscriptionItinararyFilterInput
  ) {
    onCreateItinarary(filter: $filter) {
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
export const onUpdateItinarary = /* GraphQL */ `
  subscription OnUpdateItinarary(
    $filter: ModelSubscriptionItinararyFilterInput
  ) {
    onUpdateItinarary(filter: $filter) {
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
export const onDeleteItinarary = /* GraphQL */ `
  subscription OnDeleteItinarary(
    $filter: ModelSubscriptionItinararyFilterInput
  ) {
    onDeleteItinarary(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
