import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import {db} from '../firebase.config'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      
      await setDoc(doc(db, "users", user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado com o registro')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Bem vindo de volta!</p>
        </header>
        
        <form onSubmit={onSubmit}>
          <input type="text" className="nameInput" placeholder="Nome" id="name" value={name} onChange={onChange} />
          <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChange} />
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Senha' id='password' value={password} onChange={onChange} />
            <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>Esqueceu sua senha</Link>

          <div className="signUpBar">
            <p className="signUpText">Inscrever-se</p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to='/sign-in' className='registerLink'>
        Entrar
        </Link>
      </div>
    </>
  )
}

export default SignUp
