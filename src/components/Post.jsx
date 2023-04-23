import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar';
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


export function Post({ author, content, publishedAt }) {

    const publishetAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    })

    return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
                <div className={styles.info}>
                    <strong>{author.name}</strong>
                    <span>{author.lore}</span>
                </div>
            </div>

            <time dateTime={publishetAtFormatted}>publicado {publishedDateRelativeToNow}</time>
          </header>

          <div className={styles.content}>
            <p>{content[0].content}</p>
            <p>{content[1].content}</p>
            <a href="#">{content[2].content}</a>
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