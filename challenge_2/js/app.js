console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("NewController", NewController);

function WelcomeController(){
  this.full_name = "Ricardo";
  this.age = "35";
  this.city = "Monterrey";
  this.shout = function(){
    return this.full_name.toUpperCase() +"?";
  }

}

function NewController(){
  this.class_name = "WDI";
  this.enrolled_students = "11";
  this.start_date = "11/28/16";
  this.end_date = "03/03/15";
  this.daysRemaining = function(){
    var ms_left = Date.parse(this.end_date) - Date.now();
   var days_left = Math.floor( ms_left/1000/24/60/60 );
   return days_left;
  }

  }
