
# utube -clone   

app.use(express.json({limit:"16kb" }))
//how much , which type of data are accept from the frontend - that are new  syntax , before that we are setup the the parser for that function 

express.multer  - that are use to handel the file pass from the frontend

express.urlencoded - that are handle the syntax of the url

express.static - use for handle the static file 
express.cookieParse()- handel cookies 

middleware - work like a middleman

cloudinary.js


user.module.js
video.module.js

middleware - multer.middleware.js

controllers

app.js -> route -> app.use -> user.router.js -> router.route("/register").post(registerUser)

# .some method
some method for check the empty value of the array

## authentication done


# steps
 - ## Data Modeling
   - ### user modeling
      - create schema of the user information that are store in the database
      - use mongoose middleware pre() - that is check the use password before save in the data base , and password are incrypted before save in the data base (bcrypt.hash)
      - userSchema.methods.isPasswordCorrect - check the password use enter and the password store in the db is correct or not
      - userSchema.methods.generateAccessToken - using the jwt.sign generate the access token of the user 
      - userSchema.methods.generateRefreshToken - RefreshToken generate using jwt.sign 
      - connect to the mongo db server using mongoose.model
   - ### video modeling
     - create schema for the video information (videofile,thumbnail, title, description,duration, views, isPublished, owner)
     - videoSchema.plugin(mongooseAggregatePaginate)


# multer -

# Auth middleware

# Routes 
  ## - user Routes 
        

# utils - 
   ## - API Error 
        - create a class that are handle the error
        - handle errors 
        
   ## - API Response 
         -  handle api response


   ## - AsyncHandler
          -   async code handle

   ## - cloudinary 
       - upload file in the cloudinary from the localfilepath
       - if any error is  accure the file was unlink        

- ## DB-connect (db-> index.js)
   - connect to the online data base server of mongodb that have a specific key , that are store in the .env file
- ## controllers - user controller.js 
  - ### generate the access token and the Refresh token
  - ### Register user
    - get user details from  frontend
    - validation - not empty
    - check if user already exists -username/email
    - check for images files, check for avatar
    - upload them to cloudinary, avatar
    - create user object - create entry in db
    - remove password and refresh token field from response
    -  check for use creation
    - return res

  - ### Login User 
      - req body se data  le aoo
      - username or email login
      - find the user
      - password check
      - access and refresh token
      - send cookie
      - rend res

   - ### User Logout
      - find by _id
      - set refreshToken - undefined
      

      
