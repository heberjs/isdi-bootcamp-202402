import mongodb from "mongodb";

const { MongoClient, ObjectId } = mongodb;

//creamos una nueva instancia de mongoclient y especificamos la url de conexion
const client = new MongoClient("mongodb:localhost://27017");

// conectamos al servidor de Mongodb
client
  .connect()

  .then((connection) => {
    //una vez conectados obtenemos una ref a la db de test
    const db = connection.db("test");

    //obtenenmos refs a las colecciones 'users' y 'posts' dentro de la base de datos test
    const users = db.collection("users");
    const posts = db.collection("posts");
  });
