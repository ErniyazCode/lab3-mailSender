const nodemailer = require("nodemailer")

const sendEmail = async (to, messageContent) => {
    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            post: 587,
            secure: false,
            auth: {
                user:'erni86278@gmail.com',
                pass:'yxkumxegdknwuwdv'
            }
        })

        const message = {
            to, 
            subject: "New message from diki",
            html: `
            <h3>You have received new message for yourself</h3>
            <p>${messageContent}</p>
            `
        }

        const info = await transporter.sendMail(message)
        console.log('Message is sent', info.messageId)
    } 
    catch(err) {
        console.log(err)
        throw new Error('Email is not sent')
    }
}

module.exports = sendEmail