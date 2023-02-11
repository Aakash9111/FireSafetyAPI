const CSVToJSON = require('csvtojson')
CSVToJSON()
  .fromFile('dat.csv')
  .then(users => {
    console.log(users)
  })
  .catch(err => {
    console.log(err)
})

