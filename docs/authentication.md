For authentication we are using django-graphql-auth and passwordless-registration
docs: https://django-graphql-auth.readthedocs.io/en/latest/

Mutations:

1) Register user and sends email with set password token

    ```mutation {
      register(email: "<str>") {
        success,
        errors
      }
    }


2) When valid token, sets password for user

    ```mutation {
      passwordSet(
        token: "<str>",
        newPassword1: "<str>",
        newPassword2: "<str>"
      ) {
        success,
        errors
      }
    }
3) Login - return refreshToken(valid for 7 days) and token(valid for 5 minutes)
    ```mutation {
      login(
        email: "<str>"
        password: "<str>"
      ) {
        success,
        errors,
        token,
        refreshToken,
        unarchiving,
        user {
          id,
          username
          ...
        }
      }
    }

4) Refresh token - takes refresh tokens and generates new valid token
    ```mutation {
      refreshToken(
        refreshToken: "<str>"
      ) {
        success,
        errors,
        payload,
        refreshExpiresIn,
        token,
        refreshToken
      }
    }

5) Logout - revoking refresh token

     ```mutation {
      revokeToken(
        refreshToken: "<str>"
      ) {
        success,
        errors
      }
    }