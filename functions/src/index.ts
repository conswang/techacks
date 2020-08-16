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
    .where("subject", "==", req.body.subject)
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

app.post("/createUser", (req, res) => {
  admin
    .auth()
    .createUser({
      email: req.body.email,
      password: req.body.password,
    })
    .then(() => {
      return admin
        .firestore()
        .collection("users")
        .add(req.body)
        .then((doc) =>
          res.json({ message: `document ${doc.id} created successfully` })
        );
    })
    .catch((err) => {
      res.status(500).json({
        error: "could not create user",
      });
      console.error(err);
    });
});

app.post("/getUser", (req, res) => {
  admin
    .firestore()
    .collection("users")
    .where("email", "==", req.body.email)
    .get()
    .then((doc) => res.json(doc))
    .catch((err) => {
      res.status(500).json({ error: "could not get user" });
      console.log(err);
    });
});
app.post("/uploadNotesImage", (req, res) => {
  const busBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");
  const busboy = new busBoy({ headers: req.headers });

  let imageFileName: string;
  let ImageUpload = { filepath: "", mimetype: undefined };
  busboy.on(
    "file",
    (
      fieldname: any,
      file: any,
      filename: any,
      encoding: any,
      mimetype: any
    ) => {
      console.log(fieldname, file, filename, encoding, mimetype);
      if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
        return res.status(400).json({ error: "Wrong file type submitted" });
      }
      // my.image.png => ['my', 'image', 'png']
      const imageExtension = filename.split(".")[
        filename.split(".").length - 1
      ];
      // 32756238461724837.png
      imageFileName = `${Math.round(
        Math.random() * 1000000000000
      ).toString()}.${imageExtension}`;
      const filepath = path.join(os.tmpdir(), imageFileName);
      ImageUpload = { filepath, mimetype };
      file.pipe(fs.createWriteStream(filepath));
      return res.status(400).json({ message: filepath + ImageUpload });
    }
  );
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(ImageUpload.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: ImageUpload.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${"colab-techacks.appspot.com"}/o/${imageFileName}? alt?=media`;
        return admin
          .firestore()
          .collection("notes")
          .doc("yyOBkuXM142U7SiZKZrR")
          .update({ image: imageUrl });
      })
      .then(() => {
        return res.json({ message: " image upload success" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({
          error:
            err.code +
            " " +
            ImageUpload.filepath +
            " " +
            ImageUpload.mimetype +
            imageFileName,
          message: imageFileName,
        });
      });
  });
  req.pipe(busboy);
});
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
