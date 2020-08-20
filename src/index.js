import styles from './styles.css'
import badge from './svg/appstore_badge.svg'
import phone from './svg/phone.png'

document.body.appendChild(
    <div id={styles.app} >
        <div id={styles.main}>
            <h1 id={styles.title}>Monte Carlo XO</h1>
            <p id={styles.description}>
                The classic and ubiquitous game of Tic-tac-toe played against a Monte Carlo simulation.
            </p>
        </div>
        <div id={styles.images}>
            <img className={styles.image} src={phone} />
            <a><img className={styles.image} src={badge} /></a>
        </div>
        <div id={styles.privacy} >
            <h1>Privacy Policy</h1>
            <p>
                Tic Tac Toe does not require any personally identifiable information whatsoever. 
                Monte Carlo XO does collect, store or transmit any personal information.
            </p>
        </div>
    </div>
)
