import React, {ReactNode, createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext({
  user: null,
  setUser: (user: any) => {},
  login: (email: string, password: string) => {},
  googleLogin: () => {},
  facebookLogin: () => {},
  register: (email: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.warn(e);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();

            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.warn(error);
          }
        },
        facebookLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (error) {
            console.warn(error);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.warn(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.warn(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
