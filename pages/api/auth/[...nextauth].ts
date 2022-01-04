import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { postLogin } from "../../../libs/directory/authentication";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john@doe.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const response = await postLogin({ email, password });

        if (response.code < 400) {
          const user = response.data;
          return user;
        }

        return null;
      },
    }),
  ],
  secret: "Ifc*28S:Q@wn",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: "/authentication/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          accessToken: user.token,
          user: user.user,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken;
        session.user = token.user;
      }

      return session;
    },
  },
  jwt: {
    secret: "mGq:c`jP,4dK8='",
    maxAge: 24 * 60 * 60,
  },
  debug: true,
});
