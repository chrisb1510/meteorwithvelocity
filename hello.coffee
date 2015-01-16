if Meteor.isClient
  Template.hello
  # counter starts at 0
  Session.setDefault "counter", 0

  console.log Template.hello
  Template.hello.helpers counter: ->
    Session.get "counter"


  Template.hello.events "click button": ->
    debugger
    # increment the counter when button is clicked
    Session.set "counter", Session.get("counter") + 1
    return

if Meteor.isServer
  Meteor.startup ->
    # code to run on server at startup