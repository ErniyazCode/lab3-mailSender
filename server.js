const express = require('express')
const sendEmail = require('./utils/sendEmail')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('email-form')
})


app.post('/send-email', async(req, res) => {
    const {email, message} = req.body
    try {
        sendEmail(email, message)
        res.render('email-form', {
            status:'success',
            message:'Email sent successfully'
        })
    }
    catch(err) {
        console.log(err)
        res.render('email-form', {
            status:'Error',
            message:'Error with email'
        })
    }
})


app.listen(PORT, console.log('server is here'))
