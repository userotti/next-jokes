import styles from './Joke.module.css'

export default function Joke(props) {
  return (
    <p className={styles.default}>
      {props.value}
    </p>
  )
}