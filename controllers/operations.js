var axios = require('axios');
const getFollowAccounts = (req, res) => {
    let username = req.params.username
    const token = req.headers.authorization
    var config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/by/username/' + username,
        headers: {
            'Authorization': token,
            'Cookie': 'guest_id=v1%3A167456359633592137; guest_id_ads=v1%3A167456359633592137; guest_id_marketing=v1%3A167456359633592137; personalization_id="v1_irEX+qhLOPLx4KgQBObSSQ=="'
        }
    };

    axios(config)
        .then(function (response) {
            let id = response.data.data.id
            console.log(id)
            getfollowers(id,res,token)
        })
        .catch(function (error) {
            console.log("error in getFollowAccounts");
        });
}
const getfollowings = async(data,res,id,token) => {
    var config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/'+id+'/following'+'?max_results=1000',
        headers: {
            'Authorization': token,
            'Cookie': 'ct0=02ef871f6583e9c8b9920285efee86da; guest_id=v1%3A167456359633592137; guest_id_ads=v1%3A167456359633592137; guest_id_marketing=v1%3A167456359633592137; personalization_id="v1_irEX+qhLOPLx4KgQBObSSQ=="'
        }
    };

    axios(config)
        .then(function (response) {
            compare(data,response.data.data,res)
        })
        .catch(function (error) {
            console.log("error in getFollowing");
        });

}
const getfollowers = async(id,res,token) => {
    let url = 'https://api.twitter.com/2/users/' + id + '/followers'+'?max_results=1000'
    var config = {
        method: 'get',
        url: url,
        headers: {
            'Authorization':token,
            'Cookie': 'guest_id=v1%3A167456359633592137; guest_id_ads=v1%3A167456359633592137; guest_id_marketing=v1%3A167456359633592137; personalization_id="v1_irEX+qhLOPLx4KgQBObSSQ=="'
        }
    };
    axios(config)
        .then(function (response) {
            getfollowings(response.data.data ,res,id,token)
        })
        .catch(function (error) {
            console.log("error in getfollowers");
        });

}
const compare = (followers,followings,res)=>{
    let follower_id = toarray(followers)
    let following_id = toarray(followings)
    var result = []
    for(let i = 0; i < following_id.length; i++){
        if(!follower_id.includes(following_id[i])){
            result.push(following_id[i])
        }
    }
    res.status(200).json(result)
}
const toarray = (objects)=>{
    var list = []
    for(let i = 0; i< objects.length;i++){
        list.push(objects[i].username)
    }
    return list
}
module.exports = { getFollowAccounts }
