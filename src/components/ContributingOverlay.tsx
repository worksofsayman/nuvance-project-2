import styles from '../app/contributing.module.css';
import Link from 'next/link';
import { Rock_Salt } from 'next/font/google';

const rockSalt = Rock_Salt({ subsets: ['latin'], weight: '400' });

export default function ContributingPage() {
  return (
    <div className={styles.wrapper}>
      {/* Top Left Paragraph */}
      <p className={styles.topText}>
        THE ORIGINS OF OUR PROJECT <br />
        GO BACK TO THE DARKEST <br />
        TIMES – THE TIMES OF WAR, <br />
        WHEN MANY ANIMALS WERE <br />
        LEFT HOMELESS. THIS <br />
        HELPLESSNESS AND PAIN THAT <br />
        WE FELT FOR THE ANIMALS <br />
        SPURRED US TO ACTION.
      </p>

      {/* Big Title */}
      <div className={styles.titleBlock}>
        <span className={`${styles.discordTag} ${styles.tag}`}>DISCORD</span>
        <h1 className={`${styles.title} ${rockSalt.className}`}>
          WAY OF <span className={styles.twitterTag}>TWITTER</span> CONTRIBUTING
        </h1>
        <span className={`${styles.instagramTag} ${styles.tag}`}>INSTAGRAM</span>
      </div>

      {/* Subtitle and Paragraph */}
      <div className={styles.bottomBlock}>
        <h2 className={styles.subtitle}>
          NOT JUST DIGITAL <br /> CHARACTERS, BUT <br /> SOMETHING MORE
        </h2>
        <p className={styles.bottomText}>
          A collection that has a deeper <br />
          meaning and helps those in need. <br />
          That’s how My Pet Hooligan was <br />
          born – a collection of NFTs with <br />
          unique characters, each of which <br />
          brings not only fun and <br />
          unpredictability, but also hope <br />
          for a better future.
          <br /><br />
          Each NFT sold from our collection <br />
          partially funds assistance to <br />
          shelters for animals in need <br />
          during the war. This is our way of <br />
          contri
        </p>
      </div>
    </div>
  );
}