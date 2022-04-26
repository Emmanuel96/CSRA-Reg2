require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var dashboardRouter = require('./routes/dashboard');
var uploadRouter = require('./routes/upload');

var app = express();

//MongoDB connect
const url = process.env.DATABASE_URL
console.log("Connecting to mongodb...")
mongoose.connect(url)
  .then(() => {
    console.log('MongoDB Connected Successfully');
  })  
  .catch((error) => {
  console.log('Error connecting to MongoDB:', error.message)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

//Passport setup

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authRouter);
app.use('/', dashboardRouter);
app.use('/', uploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;