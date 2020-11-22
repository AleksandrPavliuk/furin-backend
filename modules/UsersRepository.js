const fs = require('fs')
const paths = {
  STORAGE: './storage/users.json',
}

module.exports = class UsersRepository {
  constructor() {}

  // MARK : Private
  static getJSON() {
    try {
      const data = fs.readFileSync(paths.STORAGE, 'utf-8')
      return JSON.parse(data)
    } catch (err) {
      console.log('ERROR! 💥')
      console.error(err)
    }
  }

  // MARK : Public
  theCount() {
    const dataStrig = UsersRepository.getJSON()
    return dataStrig[0].count
  }

  increase() {
    const dataStrig = UsersRepository.getJSON()
    dataStrig[0].count = dataStrig[0].count + 1

    var resultAtString = JSON.stringify(dataStrig)
    try {
      fs.writeFileSync(paths.STORAGE, resultAtString)
    } catch (err) {
      console.log('ERROR! 💥')
      console.error(err)
    }

    return dataStrig[0].count
  }
}
