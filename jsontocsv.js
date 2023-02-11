const json2csv = require('json-2-csv')
const fs = require('fs')

const todos = [
  {
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  }
]


json2csv.json2csv(todos, (err, csv) => {
  if (err) throw err
  console.log(csv)
  fs.writeFileSync('dat.csv',csv)
})