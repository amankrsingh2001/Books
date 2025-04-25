import zod from "zod"

export const SignupVaidation = zod.object({
    firstName : zod.string(),
    lastName:zod.string(),
    email:zod.string(),
    password:zod.string().min(6).max(20)
})

export const loginValidation = zod.object({
    email:zod.string(),
    password:zod.string().min(6).max(20)
})
