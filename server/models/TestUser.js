import mongoose from "mongoose";

const TestUserSchema = new mongoose.Schema({
    name: String
})

const TestUser = mongoose.model('tests', TestUserSchema)

export { TestUser }