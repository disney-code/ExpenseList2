// import { useState } from "react";
import styles from './Button.module.css'
interface Props{
onClick1:()=>void;
}
function Button({onClick1}:Props){
  return(
    // <button className={[styles.btn,styles['btn-primary']].join(' ')} onClick={onClick1}>My Button</button>
    
    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={onClick1}>My Button</button>
    //<button className={styles.btn } onClick={onClick1}>My Button</button>
  )
}

export default Button;