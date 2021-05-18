const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("js"));


const passport = require('passport')
, TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    // 上記アプリ登録で取得したキーを指定します。
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    // callbackで受け取りたいURLを指定します。
    callbackURL: "http://www.example.com/auth/twitter/callback"
  },
  // Callback時の処理を記載します。
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      // ここではユーザーが存在すれば、次の処理へ移ります。
      done(null, user);
    });
  }
));
// 認証を開始する処理を記載します。
app.get('/auth/twitter', passport.authenticate('twitter'));

// コールバックで呼び出された際の処理を記載します。
app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/login' }));



app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("start.ejs");
});

// サーバーを起動するコードを貼り付けてください
app.listen(3000);

localhost: 3000;
