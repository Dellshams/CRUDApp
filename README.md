# CRUDApp

Description
Zuri Task to create a crud app with NodeJs, Express and MongoDb 

## API DOCUMENTATION

###Routes

**CREATE**
POST request to create a user
`POST /user`
 
 **Parameters**
 
 1. name
 2. email
 3. country
 
 **Response**
 ```
{
    "status": true,
    "message": "User details created successfully",
    "newUser": {
    
    }
}
```

**GET**
GET request to get all users
`GET /user`

 **Response**
 ```
{
    "data":
}
```

GET request o get a single user by ID
`GET /users/:id`

 **Response**
 ```
{
    "data":
}
```

**UPDATE**
PUT request to '/users/:id route (To update User details)
`PUT /users/:id`

 **Parameters**
 
 2. email
 3. country

 **Response**
 ```
{
    "message": "User details updated successfully"
}
```

**DELETE**
DELETE request to '/users/:id' route (To delete User details)
`DELETE /users/:id`

 **Response**
 ```
{
    "message": "User details deleted successfully"
}
```

**Live Link--------> https://deserted-quartz-chanter.glitch.me OR https://crudtaskforzuri.herokuapp.com**
