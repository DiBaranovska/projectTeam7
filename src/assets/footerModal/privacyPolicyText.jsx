import css from '../../components/footerModal/footerModal.module.scss'

const privacyPolicyText = () => {
  return (
    <div className={css.modal__text}>
      <p>Your privacy is important to us. This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.</p>
      <p>What personal data do we collect:<br/>We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.</p>
      <p>How we use your personal data:<br/>We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.</p>
      <p>Protection of personal data:<br/>We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.</p>
      <p>Disclosure to third parties:<br/>We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.</p>
      <p>Changes to the Privacy Policy:<br/>We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.</p>
      <p>Contact us:<br/>If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.</p>
    </div>
  );
};

export default privacyPolicyText;