const { userService } = require('../../src/services/index')

describe('User Filter', () => {
  it('should only receive field value', async () => {
    let response = await userService.filterBuild({ filter: 'websites' })

    expect({ query: {}, field: 'website -_id', params: {} }).toEqual(response)
  })

  it('should only receive field and params with sorting', async () => {
    let response = await userService.filterBuild({ filter: 'work' })

    expect({
      query: {},
      field: 'name email company.name -_id',
      params: { sort: { name: 1 } }
    }).toEqual(response)
  })

  it('should only receive query with value', async () => {
    let response = await userService.filterBuild({ filter: 'address' })

    expect({ query: { 'address.suite': /suite/i }, field: {}, params: {} }).toEqual(response)
  })
})
