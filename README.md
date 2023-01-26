# twitter
Customizing some twitter features
Use_Case : You can use this API to get list of 'no follow back' for any twitter account . Just put username in curl & your token 

How to access bearer token from twitter ? :-> Watch this YT video https://www.youtube.com/results?search_query=How+to+Get+a+Twitter+API+Key+TODAY 

As of now this API will work dor usernames whose followers & followings is less than 1000

I am working on pagination part 


Curl : 

curl --location --request GET 'http://localhost:3000/nofollowback/shivaam_tech' \
--header 'Authorization: Bearer PASTE_YOUR_TOKEN'
