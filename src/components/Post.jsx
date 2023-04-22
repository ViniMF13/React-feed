import styles from './Post.module.css'
import { Comment } from './Comment'


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

          <form className={styles.commentForm}>
             <strong>Give a Feedback</strong>
             
             <textarea placeholder='Deixe seu comentário'/>

             <footer>
                 <button type='submit'>Coment</button>
             </footer>
          </form>

          <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </article>
    )
       
}