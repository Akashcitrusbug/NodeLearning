// CURD Create Read udpate delete

// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.id.length);
// console.log(id.getTimestamp());

// a 4-byte value representing the seconds the unix epocah
// a 5-byte random value
// a 3-byte counter, starting with a random value
// 63a54562a53dac3d183d2025

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    // Create
    // db.collection("users").insertOne(
    //   {
    //     // _id: id,
    //     name: "Vikram",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Rachit",
    //       age: 23,
    //     },
    //     {
    //       name: "Kunal",
    //       age: 18,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // const taskDoc = [
    //   { description: "Task 1", completed: true },
    //   { description: "Task 2", completed: true },
    //   { description: "Task 3", completed: false },
    // ];
    // db.collection("tasks").insertMany(taskDoc, (error, result) => {
    //   if (error) {
    //     return console.log("unable to connet");
    //   }
    //   console.log(result.ops);
    // });

    // Read
    // db.collection("users").findOne(
    //   { _id: new ObjectID("63a546faa8c73f17501ea07e") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ name: "AKash" })
    //   .toArray((error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   });

    // db.collection("users")
    //   .find({ name: "AKash" })
    //   .count((error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("63a543d8abb47d3660f09d41") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(task, "by id");
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(task, "not completed");
    //   });

    // Update
    // const updatePromise = db.collection("users").updateOne(
    //   { _id: new ObjectID("63a5402760683a2bd8451b4a") },
    //   {
    //     $set: {
    //       name: "Mike",
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Delete
    // db.collection("users")
    //   .deleteMany({ age: 25 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({ description: "Task 1" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
