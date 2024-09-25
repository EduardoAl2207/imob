import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('O e-mail foi enviado')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível enviar o e-mail de redefinição')
    }
  }

  return (
    <div className='pageContainer'>
    <header>
      <p className="pageHeader">Esqueceu sua senha</p>
    </header>

    <main>
      <form onSubmit={onSubmit}>
        <input
         type="email" 
         className="emailInput" 
         placeholder='Email' 
         id='email' 
         value={email} 
         onChange={onChange} />
         <Link className='forgotPasswordLink' to='/sign-in'>
         Entrar
         </Link>
         <div className="signInBar">
           <div className="signInText">Enviar link de redefinição</div>
           <button className="signInButton">
             <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
           </button>
         </div>
      </form>
    </main>
    </div>
  )
}

export default ForgotPassword
