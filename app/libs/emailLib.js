'use strict';

const nodemailer = require('nodemailer');


let sendEmail = (sendEmailOptions) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'brainvitacse@gmail.com', //emailid
        pass: ''  //password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Meeting Planner " brainvitacse@gmail.com', // sender address
        to: sendEmailOptions.email, // list of receivers
        subject: sendEmailOptions.subject, // Subject line
        text: `Dear ${sendEmailOptions.name},
               Welcome to Meeting Planner Application ! A new way for creating meetings.
        `, // plain text body
        html: sendEmailOptions.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendEmail: sendEmail
  }
