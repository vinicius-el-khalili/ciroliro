import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>CiroLiro!</h1>
      <h2>:3 :3 :3</h2>
      <Image src={"/ciroliro.jpg"} width={500} height={500} alt={""} style={{objectFit:"contain"}}/>
    </main>
  )
}
