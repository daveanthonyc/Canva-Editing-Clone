import { TestUser } from "../models/TestUser.js"

const testGet = async (req, res) => {
    try {
        const response = await TestUser.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
}

export {testGet}