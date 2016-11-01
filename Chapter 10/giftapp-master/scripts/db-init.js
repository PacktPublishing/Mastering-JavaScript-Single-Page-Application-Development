db = db.getSiblingDB('giftapp');

now = new Date();

var user1 = {firstName:"Mark", lastName:"Smith", email:"msmith@xyzzymail.org", created: now};
var user2 = {firstName:"Sally", lastName:"Jones", email:"sjones@xyzzymail.org", created: now};

var users = [user1, user2];

db.users.insert(users);


