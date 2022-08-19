'use strict';
const axios = require('axios');
const { PRODUCT_API_INTERNAL_URL } = require('../config');

//const container_url = `http://host.docker.internal:3000/containers`;
//const user_url = `http://host.docker.internal:3001/users`;


exports.get_product_by_id = async function(productId){
    let url = PRODUCT_API_INTERNAL_URL + '/' + productId;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
        throw error;
    });
};

/*exports.users_get_all = function(req, res){
    let url = AUTH_API_INTERNAL_URL;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.users_get_by_id = function(req, res){
    let url = AUTH_API_INTERNAL_URL + '/' + req.params.id;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.status = function(req, res){
    res.send('Proxy is running');
}; 
*/