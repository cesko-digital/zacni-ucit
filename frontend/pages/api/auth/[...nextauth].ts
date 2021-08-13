import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

interface UserExtended extends User {
  firstName?: string | null;
  lastName?: string | null;
}

export default (req: any, res: any) =>
  NextAuth(req, res, {
    providers: [
      Providers.Credentials({
        name: 'Credentials',
        credentials: {
          email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async credentials => {
          try {
            const data = {
              email: credentials.email,
              password: credentials.password,
            };
            // API call associated with authentification
            const res = await login(data);

            if (res) {
              const user = {
                ...res,
              };
              return Promise.resolve(user);
            }
          } catch (error) {
            if (error.response) {
              Promise.reject(new Error('Invalid Username and Password combination'));
            }
          }
        },
      }),
    ],
    session: {
      jwt: true,
      maxAge: 1 * 3 * 60 * 60, // 3 hrs
    },
    callbacks: {
      jwt: async (token, user: UserExtended, account, profile, isNewUser) => {
        // append user info into token
        user && (token.user = user);
        user && ((token.user as any).name = user.firstName + ' ' + user.lastName);
        return Promise.resolve(token); // ...here
      },
      session: async (session, user) => {
        // set the session user attribute to data from jwt token set above
        // @ts-ignore
        session.user = user.user;
        return Promise.resolve(session);
      },
    },
    pages: {
      // if error, redirect back to '/' (Home page)
      error: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    secret: 'secret',
    jwt: {
      encryption: true,
      secret: 'secret',
    },
  });

const login = async data => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      APIKey: process.env.API_KEY,
      'Access-Control-Expose-Headers': 'Access-Token, Uid',
      Accept: 'application/json',
    },
  };
  // Everybody should locally set the API_URL constant in .env file to make this work, also instead of axios there should be respective login mutation
  const url = process.env.API_URL;
  const result = await axios.post(url, data, config);
  const sendData = {
    ...result.data,
    auth: result.headers.authorization,
  };
  return sendData;
};
