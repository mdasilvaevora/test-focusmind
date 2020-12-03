const dbuser = 'mdasilvaevora';
const dbpassword = 'rSlhuhs2lTIjUUye'
const dbname = 'lyster-dev'

//const MONGODB_URI =  `mongodb://heroku_66gzqdkc:mj4vbifos0kg2h2fm1do2t3qnl@ds255889.mlab.com:55889/heroku_66gzqdkc`;
const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-xmwcg.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {
    mongoURI: MONGODB_URI,
  };