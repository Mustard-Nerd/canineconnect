import type { NextAuthConfig } from "next-auth";

import Credentials  from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";


import { loginSchema } from "./types/schemas";

export default {
    pages: {
        error: '/login',
		signIn: '/login',
		signOut: '/login',
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    // check if user exists in db
                    // const user = await getUserByEmail(email);

                    // if user does not exist or user does not have a password
                    // if (!user || !user.password) return null;

                    // check if password is correct
                    // const passwordValid = await bcrypt.compare(password, user.password);

                    // if (passwordValid) {
                    //     return user;
                    // }
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;