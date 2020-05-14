define({ "api": [
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/:meetingId/details",
    "title": "api for Getting meeting details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the Meeting. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"Meeting Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b9a2581d1508e15f402fb36\",\n        \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n        \"meetingPlace\": \"Golden Palace\",\n        \"meetingDescription\": \"Test Meeting for Updating\",\n        \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n        \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n        \"participantEmail\": \"sayyedshahrukh313@gmail.com\",\n        \"participantName\": \"Ahtesham Sayyed\",\n        \"participantId\": \"B1cyuc8OX\",\n        \"hostName\": \"Shahrukh Sayyed\",\n        \"hostId\": \"B1cyuc8OX\",\n        \"meetingTopic\": \"Test Meeting\",\n        \"meetingId\": \"rJttBsw_m\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsMeetingidDetails"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/view/all/meetings/:userId",
    "title": "api for Getting all Meetings of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meetings Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5b9a2581d1508e15f402fb36\",\n            \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n            \"meetingPlace\": \"Golden Palace\",\n            \"meetingDescription\": \"Test Meeting for Updating\",\n            \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n            \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n            \"participantEmail\": \"sayyedshahrukh313@gmail.com\",\n            \"participantName\": \"Ahtesham Sayyed\",\n            \"participantId\": \"B1cyuc8OX\",\n            \"hostName\": \"Shahrukh Sayyed\",\n            \"hostId\": \"B1cyuc8OX\",\n            \"meetingTopic\": \"Test Meeting\",\n            \"meetingId\": \"rJttBsw_m\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "GetApiV1MeetingsViewAllMeetingsUserid"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/addMeeting",
    "title": "api to Add Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTopic",
            "description": "<p>Topic of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hostId",
            "description": "<p>User Id of the user hosting Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hostName",
            "description": "<p>User Name of the user hosting Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantId",
            "description": "<p>User Id of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantName",
            "description": "<p>User Name of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "participantEmail",
            "description": "<p>Email of the participant. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDate",
            "description": "<p>Start date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDate",
            "description": "<p>end date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Description of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPlace",
            "description": "<p>Place of Meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b9a2581d1508e15f402fb36\",\n        \"createdOn\": \"2018-09-13T08:53:21.000Z\",\n        \"meetingPlace\": \"Leela Palace\",\n        \"meetingDescription\": \"Test Meeting for Checking\",\n        \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n        \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n        \"participantEmail\": \"sayyedshahrukh313@gmail.com\",\n        \"participantName\": \"Ahtesham Sayyed\",\n        \"participantId\": \"B1cyuc8OX\",\n        \"hostName\": \"Shahrukh Sayyed\",\n        \"hostId\": \"B1cyuc8OX\",\n        \"meetingTopic\": \"Test Meeting\",\n        \"meetingId\": \"rJttBsw_m\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAddmeeting"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/admin-meetings/sentReminders",
    "title": "api for Sending reminders to the users of the meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"Meetings Found and reminders sent\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsAdminMeetingsSentreminders"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/meetings/:meetingId/delete",
    "title": "api to Delete Meeting.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>meetingId of the Meeting to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Deleted the Meeting successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"_id\": \"5b9a2dac036ca203dc49534f\",\n            \"__v\": 0,\n            \"createdOn\": \"2018-09-13T09:28:12.000Z\",\n            \"meetingPlace\": \"Golden Palace\",\n            \"meetingDescription\": \"Test Meeting for Updating\",\n            \"meetingEndDate\": \"2018-09-12T17:57:50.382Z\",\n            \"meetingStartDate\": \"2018-09-11T20:30:00.000Z\",\n            \"participantEmail\": \"sayyedshahrukh313@gmail.com\",\n            \"participantName\": \"Ahtesham Sayyed\",\n            \"participantId\": \"B1cyuc8OX\",\n            \"hostName\": \"Shahrukh Sayyed\",\n            \"hostId\": \"B1cyuc8OX\",\n            \"meetingTopic\": \"Test Meeting\",\n            \"meetingId\": \"rkHhTovdm\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PostApiV1MeetingsMeetingidDelete"
  },
  {
    "group": "Meetings",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/meetings/:meetingId/updateMeeting",
    "title": "api to Update Meeting Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": "<p>Id of the Meeting. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingTopic",
            "description": "<p>Topic of the Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingStartDate",
            "description": "<p>Start date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingEndDate",
            "description": "<p>end date/time of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingDescription",
            "description": "<p>Description of Meeting. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingPlace",
            "description": "<p>Place of Meeting. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Meeting Updated\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Meeting details Updated\",\n        \"status\": 200,\n        \"data\": \"None\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meetings",
    "name": "PutApiV1MeetingsMeetingidUpdatemeeting"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"Null\",\n            \"email\": \"sayyedsofttech313@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n            \"isAdmin\": \"true\",\n            \"mobileNumber\": \"91 7840962887\",\n            \"countryName\": \"India\",\n            \"userName\": \"Shah-admin\",\n            \"lastName\": \"Sayyed\",\n            \"firstName\": \"Shahrukh\",\n            \"userId\": \"B1cyuc8OX\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for SignIn to the application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ilh3a29DWmxaWCIsImlhdCI6MTU4OTMxODcxMDQ0MiwiZXhwIjoxNTg5NDA1MTEwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJNZWV0aW5nUGxhbm5lciIsImRhdGEiOnsiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImVtYWlsIjoic2FpdGVqYUBnbWFpbC5jb20iLCJzdGF0dXMiOiJvZmZsaW5lIiwiaXNBZG1pbiI6ImZhbHNlIiwibW9iaWxlTnVtYmVyIjoiODk3NzY1MDQwNyIsImNvdW50cnlDb2RlIjoiOTEiLCJ1c2VyTmFtZSI6InNhaSIsImxhc3ROYW1lIjoiTWFsYWdhIiwiZmlyc3ROYW1lIjoiU2FpdGVqYSIsInVzZXJJZCI6IlBhUFhhbHFRZSJ9fQ.sGzZlvC_M4iZQpGeHevAv4T_myIYGWXhzeq-UWcOPxs\",\n        \"userDetails\": {\n                        \"emailVerified\": \"Yes\",\n                        \"validationToken\": \"\",\n                        \"email\": \"saiteja@gmail.com\",\n                        \"status\": \"offline\",\n                        \"isAdmin\": \"false\",\n                        \"mobileNumber\": \"8977650407\",\n                        \"countryCode\": \"91\",\n                        \"userName\": \"sai\",\n                        \"lastName\": \"Malaga\",\n                        \"firstName\": \"Saiteja\",\n                        \"userId\": \"PaPXalqQe\"\n                    }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Creating User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>country Code of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>String(true/false) true-if user is admin and false-if user is not admin. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User created\",\n\"status\": 200,\n\"data\": {\n         \"_id\": \"5ebb13356a6eeb376cdf8ee8\",\n        \"createdOn\": \"2020-05-12T21:20:53.000Z\",\n        \"emailVerified\": \"No\",\n        \"validationToken\": \"\",\n        \"email\": \"saiteja@gmail.com\",\n        \"status\": \"offline\",\n        \"isAdmin\": \"false\",\n        \"mobileNumber\": \"8977650407\",\n        \"countryCode\": \"91\",\n        \"userName\": \"sai\",\n        \"lastName\": \"Malaga\",\n        \"firstName\": \"Saiteja\",\n        \"userId\": \"PaPXalqQe\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to SignOut from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersUseridLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersUpdatepassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/verifyEmail",
    "title": "api for Verifying User Email.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User email verified\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersVerifyemail"
  }
] });
