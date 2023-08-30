import { ReactComponent as FacebookIcon } from '../../img/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../img/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../img/icons/youtube.svg';
import styles from './followUs.module.scss'

const StyledFacebookIcon = FacebookIcon;
const StyledInstagramIcon = InstagramIcon;
const StyledYoutubeIcon = YoutubeIcon;

export const FollowUs = () => {
  return <div>
      <ul className={styles.socialsList}>
    <li className={styles.socialsItem}>
                    <a
                      className={styles.socialsLink}
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StyledFacebookIcon className={styles.socialsIcon}/>
                    </a>
                  </li>
                  <li className={styles.socialsItem}>
                    <a
                      className={styles.socialsLink}
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StyledInstagramIcon className={styles.socialsIcon}/>
                    </a>
                  </li>
                  <li className={styles.socialsItem}>
                    <a
                      className={styles.socialsLink}
                      href="http://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StyledYoutubeIcon className={styles.socialsIcon}/>
                    </a>
                  </li>
    </ul>
  </div>;
};
