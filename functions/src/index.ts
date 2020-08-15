import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
const app = express();

admin.initializeApp();
admin.firestore().settings({ ignoreUndefinedProperties: true });
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

app.get("/get5Notes", (req, res) => {
  admin
    .firestore()
    .collection("notes")
    .limit(5)
    .get()
    .then((data) => {
      let users: any = [];
      data.forEach((doc) => {
        users.push({
          nId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(users);
    })
    .catch((err) => console.log(err));
});
app.post("/findNotes", (req, res) => {
  admin
    .firestore()
    .collection("notes")
    .where("subject", "==", req.body.subjet)
    .limit(5)
    .get()
    .then((data) => {
      let users: any = [];
      data.forEach((doc) => {
        users.push({
          nId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(users);
    })
    .catch((err) => console.log(err));
});
app.get("/getAllUsers", (req, res) => {
  admin
    .firestore()
    .collection("users")
    .get()
    .then((data) => {
      let users: any = [];
      data.forEach((doc) => {
        users.push({
          uId: doc.id,
          ...doc.data(),
        });
      });

      return res.json(users);
    })
    .catch((err) => console.log(err));
});
app.post('/createUser', (req, res) => {
  admin
    .firestore()
    .collection("users")
    .add(req.user)
    .then((doc) =>
      res.json({ message: `document ${doc.id} created successfully` })
    )
    .catch((err) => {
      res.status(500).json({ error: "could not create notes" });
      console.error(err);
    });
})
app.post("/createNotes", (req, res) => {
  const newNotes = {
    title: req.body.title,
    uId: req.body.userId,
    description: req.body.description,
    ask: req.body.ask,
    price: req.body.price,
    pageNum: req.body.pageNum,
    created: admin.firestore.Timestamp.fromDate(new Date()),
  };
  admin
    .firestore()
    .collection("notes")
    .add(newNotes)
    .then((doc) =>
      res.json({ message: `document ${doc.id} created successfully` })
    )
    .catch((err) => {
      res.status(500).json({ error: "could not create notes" });
      console.error(err);
    });
});

// ap
exports.api = functions.https.onRequest(app);
