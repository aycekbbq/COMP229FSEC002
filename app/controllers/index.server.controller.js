/*
*COMP 229 Assignment 1
*Student Name: Samuel Leung
*Student Number: 301247397
*Due date: October 4, 2023
*/

exports.render = function(req, res) { 
    if (req.session.lastVisit) { 
          console.log(req.session.lastVisit); 
       }
    req.session.lastVisit = new Date();
     
    res.render('index', { 
       title: 'Hello World' 
    }); 
    }; 
    