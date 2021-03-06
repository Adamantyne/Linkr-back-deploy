import joi from "joi";

const signUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  username: joi.string().required(),
  image: joi.string().uri().required(),
});

export default signUpSchema;
