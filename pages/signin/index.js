import { Amplify , API, graphqlOperation} from 'aws-amplify';
import { Authenticator, TextField, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import awsExports from '../../src/aws-exports';
import { createUser } from "../../src/graphql/mutations";

Amplify.configure(awsExports);

const AIRPORT_CODE_LENGTH = 10;

const SignInView = () => {
  const { route } = useAuthenticator(context => [context.route]);
  const [homeAirportHasError, setHomeAirportHasError] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (route === "authenticated") {
      router.back();
    }
    return () => {};
  }, [route]);

  const homeAirportHandler = (e) => {
    if (!/[\w]+/.test(e.currentTarget.value)) {
      setHomeAirportHasError(true);
    } else {
      setHomeAirportHasError(false);
    }
  }

  return <Authenticator components={{
    SignUp: {
      FormFields: () => {
        return <>
          <Authenticator.SignUp.FormFields />
          <TextField
            name='custom:homeAirport'
            placeholder="Home Airport"
            maxLength={AIRPORT_CODE_LENGTH}
            minLength={1}
            errorMessage={`Username can only be 1 ~ ${AIRPORT_CODE_LENGTH} letters or numbers`}
            isRequired={true}
            onChange={homeAirportHandler}
            hasError={homeAirportHasError}
           />
        </>
      }
    }
  }}></Authenticator>;
}

export default SignInView;