// import styles from './subscribeForm.module.scss';

// export const SubscribeForm = () => {
//   return (
//     <div className={styles.subscribeForm}>
//       <p className={styles.subscribeText}>
//         Subscribe up to our newsletter. Be in touch with latest news and special
//         offers, etc.
//       </p>
//       <form className={styles.subscribeFormFields}>
//         <input
//           type="email"
//           placeholder="Enter the email"
//           className={styles.subscribeFormInput}
//         />
//         <button type="submit" className={styles.subscribeButton}>
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from 'react';
import styles from './subscribeForm.module.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');

    } catch (error) {
      setMessage('Error subscribing. Please try again later.');
    }
  };

  return (
    <div className={styles.subscribeForm}>
      <p className={styles.subscribeText}>
        Subscribe to our newsletter. Be in touch with the latest news and special
        offers, etc.
      </p>
      <form className={styles.subscribeFormFields} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter the email"
          className={styles.subscribeFormInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
