import styles from './styles.module.css'

document.body.appendChild(
    <div id={styles.app} >
        <div id={styles.main}>
            <h1 id={styles.title}>Monte Carlo XO</h1>
            <p id={styles.description}>
                The classic and ubiquitous game of Tic-tac-toe played against a Monte Carlo simulation.
            </p>
        </div>
        <div id={styles.images}>
            <h1>Augmented reality mode available now!</h1>
            <img className={styles.image} src='https://raw.githubusercontent.com/ScottORLY/montecarloxo-site/main/src/svg/product.webp' />
        </div>

        <div id={styles.badges}>
            <a href='https://apple.co/3aLanUp'>
                <img className={styles.image} src='https://raw.githubusercontent.com/ScottORLY/montecarloxo-site/main/src/svg/appstore_badge.svg' />
            </a>
            <img id={styles.qr} src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/471e3f52b11997f91faf8b5f1924380f/d42aeb95-db39-4335-8c93-a83acead6999.png"></img>
        </div>
        <div id={styles.privacy} >
            <h1>Privacy Policy</h1>
            <p>
                Tic-tac-toe does not require any personally identifiable information whatsoever. 
                Monte Carlo XO does collect, store or transmit any personal information.
            </p>
        </div>
    </div>
)
