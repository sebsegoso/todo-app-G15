import app from './config'
import { collection, doc, getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

const todoCollection = collection(db, 'todos')
const getTodoById = (id) => doc(db, 'todos', id)

export { db, todoCollection, getTodoById }
