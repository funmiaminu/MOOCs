const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

/* JWT TOKENS */
const JWT_SECRET = process.env.JWT_ACCESS_SECRET,
    JWT_SECRET_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN;

/* EMAIL and OAUTH2*/
const EMAIL_HOST = process.env.EMAIL_HOST,
    EMAIL_PORT = process.env.EMAIL_PORT,
    EMAIL_HOST_ADDRESS = process.env.EMAIL_HOST_ADDRESS,
    OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN,
    OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN
    GOOGLE_SIGNIN_CLIENT_ID = process.env.GOOGLE_SIGNIN_CLIENT_ID


module.exports = {
    MONGO_URI,
    PORT,
    JWT_SECRET,
    JWT_SECRET_EXPIRES_IN,
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_HOST_ADDRESS,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN,
    OAUTH_ACCESS_TOKEN,
    GOOGLE_SIGNIN_CLIENT_ID
}