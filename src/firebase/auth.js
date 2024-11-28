import app from './config'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const auth = getAuth(app)
// inicio de sesión
const googleProvider = new GoogleAuthProvider()
const loginWithGoogle = () => signInWithPopup(auth, googleProvider)
// cerrar sesión
const logout = () => signOut(auth)
const currentUser = () => auth.currentUser

export { loginWithGoogle, logout, currentUser }
