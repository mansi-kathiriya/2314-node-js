const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("mongodb url"),
    BASE_URL: Joi.string().trim().description("base url"),
    JWT_SECRET_KEY: Joi.string()
        .description("jwt secreat key")
        .default("this is jwt secreat key"),
    SMTP_HOST: Joi.string().description("server that will send the emails"),
    SMTP_PORT: Joi.number().description("port to connect to theemail server"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description(
        "the from field in the emails sent by the app"
    ),
}).unknown();

const { value: envVars,error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if(error){
    console.log("Config Error: ",error);
    process.exit(1);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParse: true,
            useUnifiedTopology: true,
        },
    },
    base_url: envVars.BASE_URL,
    jwt: {
        secret_key: envVars.JWT_SECRET_KRY,
    },
    email: {
        smtp: {
            host: envVars.SMTP_HOST,
            port: envVars.SMTP_PORT,
            auth: {
                user: envVars.SMTP_USERNAME,
                pass: envVars.SMTP_PASSWORD,
            },
        },
        from: envVars.EMAIL_FROM,
    },
};