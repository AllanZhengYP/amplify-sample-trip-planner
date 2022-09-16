import { Amplify, Auth } from 'aws-amplify';
import { Authenticator, Button, Flex, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import { Hub } from "@aws-amplify/core"

import awsExports from '../../src/aws-exports';
import { useRouter } from 'next/router';

Amplify.configure(awsExports);

const USERNAME_LENGTH = 50;

const SignInView = ({user}) => {
  const [userNameErrorMessage, setUserNameErrorMessage] = useState(null);
  const [userNameHasError, setUserNameHasError] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
    // const authListener = async () => {
    //   if (await Auth.currentAuthenticatedUser()) {
    //     router.replace("/");
    //   }
    // }
    // Hub.listen("auth", authListener);
    // return Hub.remove(authListener);
  }, [user]);

  const userNameHandler = (e) => {
    if (!/[\w\s\d]+/.test(e.currentTarget.value)) {
      setUserNameHasError(true);
      setUserNameErrorMessage(`Username can only be 1 ~ ${USERNAME_LENGTH} letters or numbers`);
    } else {
      setUserNameHasError(false);
      setUserNameErrorMessage(null);
    }
  }

  return <Authenticator components={{
    SignUp: {
      FormFields: () => {
        return <>
          <Authenticator.SignUp.FormFields />
          <TextField
            placeholder="User Name"
            maxLength={USERNAME_LENGTH}
            errorMessage={userNameErrorMessage}
            isRequired={true}
            onChange={userNameHandler}
            onInput={userNameHandler}
            hasError={userNameHasError}
           />
        </>
      }
    }
  }}></Authenticator>;
}

export default SignInView;