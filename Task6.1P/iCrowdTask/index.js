const express = require('express')
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const validator = require('validator');
const req = require('request');
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
    MgDBHelper.log('method:', method.toLowerCase(), url);
    next();
  }
})

app.post('/api/register', async (request, response) => {
  try {
    const {country, first_name, last_name, email, password, confirmPwd, address1, address2, city, region, zip_postal_code, tel} = request.body;
    const wel_email = {
      members: [
          {
              email_address:email,
              status: 'subscribed',
              merge_fields:{
                  FNAME: first_name,
                  LNAME: last_name
              }
          }
      ]
  }
  const postEmail = JSON.stringify(wel_email);
  const options = {
      url:'https://us17.api.mailchimp.com/3.0/lists/0d3af59680',
      method:'POST',
      headers:{
          Authorization:'auth 381c22d3d7cba45f6e26007c4ea6a2f7-us17'
      },
      body:postEmail 
  }
    if (!first_name) {
      throw Error('First name cannot be empty');
    }
    if (!last_name) {
      throw Error('Last name cannot be empty');
    }
    if (!email) {
      throw Error('Email cannot be empty');
    }
    if (!validator.isEmail(email)) {
      throw Error('Email is not valid');
    }
    if (!password) {
      throw Error('Password cannot be empty');
    }
    if (!confirmPwd) {
      throw Error('Confirm password cannot be empty');
    }
    if (password.length < 8) {
      throw Error('The password must be at least 8 characters');
    }
    if (password != confirmPwd) {
      throw Error('Incorrect password');
    }
    if (!(address1 || address2)) {
      throw Error('Address cannot be empty');
    }
    if (!city) {
      throw Error('City cannot be empty');
    }
    if (!region) {
      throw Error('Region cannot be empty');
    }
    if (tel && (!/^[0-9]*$/.test(tel))) {
      throw Error('Mobile phone number incorrect format');
    }
    console.log(request.body);
    const exists = await Register.findOne({ country, first_name, last_name });
    if (exists) {
      throw Error('Username is exists');
    }
    else{
      req(options, (err,res,body)=>{
        if(err)
        {
            throw error
        }else
        {
            if(res.statusCode === 200)
            {
                console.log("Successful Post Welcome Email!")
            }
        }

    });
    }
    const info = await Register.create(request.body);
    response.json({ msg: 'ok', data: info });
  } catch (ex) {
    response.status(400).json({ msg: ex.message })
    MgDBHelper.log(ex);
  }
})

app.use('/', (req, res, next) => {
  res.redirect('/index.html');
});
app.set('port', port);
const server = http.createServer(app);
server.listen(port, (error) => {
  MgDBHelper.connect('mongodb+srv://Cynthia:0000000@sit374.ntudk.mongodb.net/sit313?retryWrites=true&w=majority');
  if (error) {
    MgDBHelper.log('Something wrong', error)
  } else {
    MgDBHelper.log('Server is listening on port http://127.0.0.1:' + port);
  }
});

class MgDBHelper {
  static async connect(uri) {
    this.log('mongodb url...', uri);
    return await new Promise((resolve, reject) => {
      mongoose.connection
        .on('error', error => reject(error))
        .on('close', () => this.log('Database connection closed.'))
        .once('open', () => {
          this.log('mongodb connection...');
          resolve(mongoose.connections[0])
        });
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    });
  }
 
  static async close() {
    return await new Promise((resolve, reject) => {
      mongoose.disconnect((err) => {
        if (err) {
          this.log('close connection is error', err)
          return reject(err);
        }
        resolve();
      });
    });
  }

  static log() {
    try {
      const _curDate = new Date();
      const info = `${_curDate.getFullYear()}-${_curDate.getMonth() + 1}-${_curDate.getDay()} ${_curDate.getHours()}:${_curDate.getMinutes()}:${_curDate.getSeconds()}.${_curDate.getMilliseconds()}`;
      console.log(`${info}-->`, ...arguments);
    } catch (ex) {
      console.log(ex);
      console.log(args);
    }
  }
}
