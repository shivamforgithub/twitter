# twitter
Customizing some twitter features
Use_Case : You can use this API to get list of 'no follow back' for any twitter account . Just put username in curl & your token 

How to access bearer token from twitter ? :-> Open twitter in browser -> Inspect -> Network -> Headers ->Request Headers -> authorization (copy this token and paste in curl / postman )
As of now this API will work dor usernames whose followers & followings is less than 1000

I am working on pagination part & trying to tackle 429 error due to rate limiter 


Curl : 

curl --location --request GET 'http://localhost:3000/nofollowback/shivaam_tech' \
--header 'Authorization: Bearer PASTE_YOUR_TOKEN'
