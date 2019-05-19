const { getUsers } = require('../../src/utils/create-test-data')

describe('Get Users', () => {
  it('should receive user data', async () => {
    let response = await getUsers()

    expect(response.data).toBeDefined()
  })
})
