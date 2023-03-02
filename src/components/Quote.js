import styles from '../styles/Quote.module.css';

const Quote = () => (
  <div className={styles.wrapper}>
    <q className={styles.quote}>
      Mathematics consists in proving the most obvious thing in the least
      obvious way.
    </q>
    <p className={styles.author}>---- George Polya</p>
  </div>
);

export default Quote;
