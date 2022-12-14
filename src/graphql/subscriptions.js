/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateItinarary = /* GraphQL */ `
  subscription OnCreateItinarary {
    onCreateItinarary {
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
export const onUpdateItinarary = /* GraphQL */ `
  subscription OnUpdateItinarary {
    onUpdateItinarary {
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
export const onDeleteItinarary = /* GraphQL */ `
  subscription OnDeleteItinarary {
    onDeleteItinarary {
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
