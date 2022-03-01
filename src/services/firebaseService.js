import { Firedb } from "../api/firebaseConfig";
const db = Firedb.ref('/books');
class FirebaseService {
  addbooks = (books) => {
    db.push(books);
  };

  getAll() {
    return db;
  }

  get(key) {
    return db.child(key);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}
export default new FirebaseService();
