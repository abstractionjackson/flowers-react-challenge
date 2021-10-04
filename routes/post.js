import express from 'express'
import fetch from 'node-fetch'

import {JSON_API_BASE_URL} from '../constants.js'

async function fetchAll(req, res) {
    try {
        const response = await fetch(
            JSON_API_BASE_URL
            + '/posts'
        )
        const data = await response.json()
        return res.json(data)
    } catch (error) {
        console.error(error)
        return res.sendStatus(404)
    }
}

export const router = express.Router()

router.get('/all', fetchAll)

router.get('/', async (req, res) => {
    const { title } = req.query
    try {
        const response = await fetch(
            JSON_API_BASE_URL
            + '/posts'
        )
        const data = await response.json()
        return res.json(data.filter(post => post.title.includes(title)))
    } catch (error) {
        console.error(error)
        return res.sendStatus(404)
    }
})

export default router