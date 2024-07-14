const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express();

const articleRouter = require('./routes/articles')

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use('/articles',articleRouter)

app.get('/', (req, res, next) => {
    Article.find().sort({createdAt: "desc"}).then(article => {
        res.render("articles/index", {
          articles: article,
        });
    }).catch(err => {
        console.log(err)
    })
    
})

mongoose
  .connect(
    "mongodb+srv://zeeshanhamid17:$zee03052002@cluster0.3fhdcu9.mongodb.net/simplifiedBlog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    console.log("----------->Connected<----------");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
