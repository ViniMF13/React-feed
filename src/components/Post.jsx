import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <img 
                className={styles.avatar}
                src="https://github.com/viniMF13.png"
                />
                <div className={styles.info}>
                    <strong>Vinisim</strong>
                    <span>System Enginer</span>
                </div>
            </div>

            <time dateTime="2023-03-28">Publicado ha 2h</time>
          </header>

          <div className={styles.content}>
            <p>Faaaala galera!! acabei de bater uma gloriosa!</p>
          </div>
        </article>
    )
       
}