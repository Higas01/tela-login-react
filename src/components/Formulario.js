// css
import styles from './Formulario.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'


const Formulario = () => {

  return (
    <div>
      <h1 className={styles.h1_form}>Login</h1>
      <form>
      <div className={styles.div_input}>
          <FontAwesomeIcon icon={faUser} className={styles.fa_user}/>
        <label>
          <input type="text" placeholder='Digite seu nome de usuário' className={styles.input_login} name='usuario' />
          </label>
      </div>
      <div className={styles.div_input}>
        <label>
        <FontAwesomeIcon icon={faLock} className={styles.fa_lock} />
          <input type="password" placeholder='Digite sua senha' className={styles.input_login} />
        </label>
      </div>
      <div className={styles.container_input_btn}>
        <input type="button" value='Entrar'/>
      </div>
      </form>
    </div>
  )
}

export default Formulario