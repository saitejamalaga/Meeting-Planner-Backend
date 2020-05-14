const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, userName, CountryCode, mobileNumber email, password .
    app.post(`${baseUrl}/signup`, userController.signUp);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Creating User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} userName userName of the user. (body params) (required)
     * @apiParam {string} countryCode country Code of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} isAdmin String(true/false) true-if user is admin and false-if user is not admin. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User created",
        "status": 200,
        "data": {
                 "_id": "5ebb13356a6eeb376cdf8ee8",
                "createdOn": "2020-05-12T21:20:53.000Z",
                "emailVerified": "No",
                "validationToken": "",
                "email": "saiteja@gmail.com",
                "status": "offline",
                "isAdmin": "false",
                "mobileNumber": "8977650407",
                "countryCode": "91",
                "userName": "sai",
                "lastName": "Malaga",
                "firstName": "Saiteja",
                "userId": "PaPXalqQe"
            }
        }
    */


    // params: email, password.
    app.post(`${baseUrl}/login`, userController.signIn);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for SignIn to the application.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ilh3a29DWmxaWCIsImlhdCI6MTU4OTMxODcxMDQ0MiwiZXhwIjoxNTg5NDA1MTEwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJNZWV0aW5nUGxhbm5lciIsImRhdGEiOnsiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImVtYWlsIjoic2FpdGVqYUBnbWFpbC5jb20iLCJzdGF0dXMiOiJvZmZsaW5lIiwiaXNBZG1pbiI6ImZhbHNlIiwibW9iaWxlTnVtYmVyIjoiODk3NzY1MDQwNyIsImNvdW50cnlDb2RlIjoiOTEiLCJ1c2VyTmFtZSI6InNhaSIsImxhc3ROYW1lIjoiTWFsYWdhIiwiZmlyc3ROYW1lIjoiU2FpdGVqYSIsInVzZXJJZCI6IlBhUFhhbHFRZSJ9fQ.sGzZlvC_M4iZQpGeHevAv4T_myIYGWXhzeq-UWcOPxs",
                "userDetails": {
                                "emailVerified": "Yes",
                                "validationToken": "",
                                "email": "saiteja@gmail.com",
                                "status": "offline",
                                "isAdmin": "false",
                                "mobileNumber": "8977650407",
                                "countryCode": "91",
                                "userName": "sai",
                                "lastName": "Malaga",
                                "firstName": "Saiteja",
                                "userId": "PaPXalqQe"
                            }
            }
        }    
    */

    // params: email.
    app.post(`${baseUrl}/resetPassword`, userController.resetPassword);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */

    // params: validationToken,password.
    app.put(`${baseUrl}/updatePassword`, userController.updatePassword);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */

    // params: userId.
    app.put(`${baseUrl}/verifyEmail`, userController.verifyEmail);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/verifyEmail api for Verifying User Email.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User email verified",
            "status": 200,
            "data": "None"
        }
    */


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "createdOn": "2018-09-12T13:42:58.000Z",
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "sayyedsofttech313@gmail.com",
                    "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                    "isAdmin": "true",
                    "mobileNumber": "91 7840962887",
                    "countryName": "India",
                    "userName": "Shah-admin",
                    "lastName": "Sayyed",
                    "firstName": "Shahrukh",
                    "userId": "B1cyuc8OX"
                }
            ]
        }
    */

    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/logout api to SignOut from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */

}

/** Run this command : apidoc -i app/routes/ -o apidoc/ */
