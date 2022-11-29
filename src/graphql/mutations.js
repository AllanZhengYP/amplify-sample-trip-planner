/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createItinarary = /* GraphQL */ `
  mutation CreateItinarary(
    $input: CreateItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    createItinarary(input: $input, condition: $condition) {
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
export const updateItinarary = /* GraphQL */ `
  mutation UpdateItinarary(
    $input: UpdateItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    updateItinarary(input: $input, condition: $condition) {
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
export const deleteItinarary = /* GraphQL */ `
  mutation DeleteItinarary(
    $input: DeleteItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    deleteItinarary(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
