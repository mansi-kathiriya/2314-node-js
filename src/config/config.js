const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("mongodb url"),
    BASE_URL: Joi.string().trim().description("base url"),
    JWT_SECRET_KRY: Joi.string()
        .description("jwt secreat key")
        .default("this is jwt secreat key"),
    SMTP
})