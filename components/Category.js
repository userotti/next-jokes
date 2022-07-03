import styles from './Category.module.css'
import Link from 'next/link'

export default function Category(props) {
  return (
    <Link href={props.href}><a className={styles.default}>{props.category}</a></Link>
  )
}