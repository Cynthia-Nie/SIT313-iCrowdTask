const express = require('express')
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const port = process.env.PORT || 3000;
const Register = mongoose.model('Register',
  new Schema(
    {
      country: String,
      first_name: String,
      last_name: String,
      email: String,
      password: String,
      address1: String,
      address2: String,
      city: String,
      region: String,
      zip_postal_code: String,
      tel: String,
      create_time: { type: Number, comment: 'create time', default: Date.now },
    },
    {
      toJSON: {
        virtuals: true,
        transform(doc, ret) {
          delete ret.__v;
          delete ret._id;
          return ret;
        },
      },
    }
  )
)

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  const { method, url } = req;
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization,token, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
})

app.post('/api/register', async (request, response) => {
  try {
    const country = request.body.country;
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    const password = request.body.password;
    const confirmPwd = request.body.confirmPwd;
    const address1 = request.body.address1;
    const address2 = request.body.address2;
    const city = request.body.city;
    const region = request.body.region;
    const zip_postal_code = request.body.zip_postal_code;
    const tel = request.body.tel;
    if (first_name == '') {
      throw Error('First name cannot be empty');
    }
    else if (last_name == '') {
      throw Error('Last name cannot be empty');
    }
    else if (email == '') {
      throw Error('Email cannot be empty');
    }
    else if (!validator.isEmail(email)) {
      throw Error('Email is not valid');
    }
    else if (password == '') {
      throw Error('Password cannot be empty');
    }
    else if (confirmPwd == '') {
      throw Error('Confirm password cannot be empty');
    }
    else if (password.length < 8) {
      throw Error('The password must be at least 8 characters');
    }
    else if (password != confirmPwd) {
      throw Error('Incorrect password');
    }
    else if (!(address1 || address2)) {
      throw Error('Address cannot be empty');
    }
    else if (city == '') {
      throw Error('City cannot be empty');
    }
    else if (region == '') {
      throw Error('Region cannot be empty');
    }
    else if (tel && (!/^[0-9]*$/.test(tel))) {
      throw Error('Mobile phone number incorrect format');
    }
    console.log(request.body);
    const exists = await Register.findOne({ country, first_name, last_name });
    if (exists) {
      throw Error('Username is exists');
    }
    const info = await Register.create(request.body);
    response.json({ msg: 'ok', data: info });
  } catch (ex) {
    response.status(400).json({ msg: ex.message })
    console.log(ex);
  }
})

app.use('/', (req, res, next) => {
  res.redirect('/index.html');
});
app.set('port', port);
const server = http.createServer(app);
server.listen(port, (error) => {
  mongoose.connect('mongodb+srv://Cynthia:0000000@sit374.ntudk.mongodb.net/sit313?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  if (error) {
    console.log('Something wrong', error)
  } else {
    console.log('Server is listening on port http://localhost:' + port);
  }
});