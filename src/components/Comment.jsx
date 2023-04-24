import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react";


export function Comment({ content, onDeleteComment }){

    function handleDeletComment(){
       onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius F</strong>
                            <time dateTime="2023-03-28 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeletComment} title='Delete'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplause <span>89</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}