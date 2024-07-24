/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/studio","/blog"];

/**
 * An array of routes that are accessible to authenticated users
 * These routes require authentication
 * @type {string[]}
 */

export const authRoutes = ["/mail-confirmation", "/mail-verification", "/login", "/register"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";
