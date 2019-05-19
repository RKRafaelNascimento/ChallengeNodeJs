/* eslint-disable no-unused-expressions */
const request = require('supertest')
const { user, websites, work, address } = require('../../src/utils/data-for-test')

let url = 'http://localhost:3000'

describe('Route Find Users', () => {
  it('should receive all users', async () => {
    let response = await request(url).get('/user')

    expect(JSON.stringify(user)).toEqual(JSON.stringify(response.body))
  })

  it('should receive all users websites', async () => {
    let response = await request(url)
      .get('/user')
      .query({ filter: 'websites' })

    expect(JSON.stringify(websites)).toEqual(JSON.stringify(response.body))
  })

  it('should receive name,email and company in alphabetical order', async () => {
    let response = await request(url)
      .get('/user')
      .query({ filter: 'work' })

    expect(JSON.stringify(work)).toEqual(JSON.stringify(response.body))
  })

  it('should show all users that have word "suite" at the address', async () => {
    let response = await request(url)
      .get('/user')
      .query({ filter: 'address' })

    expect(JSON.stringify(address)).toEqual(JSON.stringify(response.body))
  })

  it('should expect status 400 filter invalid', async () => {
    let response = await request(url)
      .get('/user')
      .query({ filter: 'random' })

    expect(response.status).toBe(400)
  })
})
