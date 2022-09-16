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
      itinararyID
      createdAt
      updatedAt
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
      itinararyID
      createdAt
      updatedAt
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
      itinararyID
      createdAt
      updatedAt
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
      email
      name
      plannedItins {
        items {
          id
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      plannedItins {
        items {
          id
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      plannedItins {
        items {
          id
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
export const createItinarary = /* GraphQL */ `
  mutation CreateItinarary(
    $input: CreateItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    createItinarary(input: $input, condition: $condition) {
      id
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
export const updateItinarary = /* GraphQL */ `
  mutation UpdateItinarary(
    $input: UpdateItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    updateItinarary(input: $input, condition: $condition) {
      id
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
export const deleteItinarary = /* GraphQL */ `
  mutation DeleteItinarary(
    $input: DeleteItinararyInput!
    $condition: ModelItinararyConditionInput
  ) {
    deleteItinarary(input: $input, condition: $condition) {
      id
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
