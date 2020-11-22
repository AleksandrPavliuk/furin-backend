var assert = require('assert')
const UsersRepository = require('./modules/UsersRepository')

// MARK : UsersRepository
describe('UsersRepository', function () {
  describe('getJSON', function () {
    const usersRepository = new UsersRepository()
    it('should be an object', function () {
      assert.equal(usersRepository.getJSON, undefined)
    })
  })
})

describe('UsersRepository', function () {
  describe('theCount()', function () {
    const usersRepository = new UsersRepository()
    it('should not be null', function () {
      assert.notEqual(usersRepository.theCount(), null)
    })
  })
})

describe('UsersRepository', function () {
  describe('increase()', function () {
    const usersRepository = new UsersRepository()
    it('should increase the count by 1', function () {
      const expectedCount = usersRepository.theCount() + 1
      assert.equal(usersRepository.increase(), expectedCount)
    })
  })
})
