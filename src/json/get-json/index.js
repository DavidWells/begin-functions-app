let begin = require('@architect/functions')

// TODO change defaultJSON
let defaultJSON = {
  ok: true,
  wow: true,
  coo: 'hahha'
}

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: defaultJSON
  })
}

exports.handler = begin.json.get(route)
