const fs = require('fs')
const paths = {
  STORAGE: './storage/users.json',
}

module.exports = class UsersRepository {
  constructor() {}

  // MARK : Private
  static getData() {
    const data = fs.readFileSync(paths.STORAGE, 'utf-8')
    return JSON.parse(data)
  }

  // MARK : Public
  theCount() {
    const dataObj = UsersRepository.getData()
    return dataObj[0].count
  }

  increase() {
    const dataObj = UsersRepository.getData()
    dataObj[0].count = dataObj[0].count + 1
    var resultAtString = JSON.stringify(dataObj)
    fs.writeFileSync(paths.STORAGE, resultAtString)
    fs.writeFile(paths.STORAGE, resultAtString, 'utf-8', (err) => {
      console.log('Your file has been written 😁')
    })

    return dataObj[0].count
  }
}
