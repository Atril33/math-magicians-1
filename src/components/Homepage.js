import styles from '../styles/Homepage.module.css';

const Homepage = () => (
  <div className={styles.wrapper}>
    <article>
      <h1>Welcome to our page!</h1>
      <p>
        This website is a Single Page Application implemented with React. It is
        dedicated to all fans of Mathematics. So far
        <em> calculator </em>
        and
        <em> quotes </em>
        are the current features of our web application. However, we will plan
        to add more cool features in the future.
      </p>
      <p>
        Vel fringilla est ullamcorper eget nulla. Sit amet porttitor eget dolor
        morbi non arcu.
      </p>
    </article>
  </div>
);

export default Homepage;
