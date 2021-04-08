const admin = require('firebase-admin');
const service_acc = require('./new-shop-service-acc.json');
admin.initializeApp({
    credential: admin.credential.cert(service_acc)
});
const db = admin.firestore();
let a = [];
db.collection('new-shop').get().then((e)=>{
    e.forEach((doc)=>{
        console.log(doc.data());
        a.push(doc.data());
    });
});

module.exports = a;