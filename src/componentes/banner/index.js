import styles from "./banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/MInha foto-Vini.jpeg"

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Desenvolvedores !
                </h1>
                <p className={styles.paragrafo}>

                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="imagem de um circulo colorido"/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Carlos sorrindo" />
            </div>
        </div>
    )
}