import React from 'react'
import '../../style/Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className='policy'>
      <div className="policy-container">
        <h1 className="policy-heading">Privacy Policy</h1>

        <div className="policy-title">Introduction</div>
        <li className="policy-p">Thank you for visiting our website. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and interact with our services.</li>


        <div className="policy-title">Information Collection</div>
        <li className="policy-p">Personal information such as name, email address, and phone number provided voluntarily through forms or account registration.</li>
        <li className="policy-p">Non-personal information such as browser type, IP address, and operating system collected automatically through cookies and analytics tools.</li>

        <div className="policy-title">Information Use</div>
        <li className="policy-p">To process orders and payments.</li>
        <li className="policy-p">To provide customer support and respond to inquiries.</li>
        <li className="policy-p">To personalize user experience and improve our website and services.</li>

        <div className="policy-title">Data Security</div>
        <li className="policy-p">We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits.</li>

        <div className="policy-title">Third-Party Disclosure</div>
        <li className="policy-p">We may share your personal information with third-party service providers such as payment processors and shipping companies solely for the purpose of fulfilling orders and providing services. We do not sell or rent your personal information to third parties.</li>

        <div className="policy-title">User Rights</div>
        <li className="policy-p">You have the right to access, correct, and delete your personal information. You can exercise these rights by contacting us through the contact information provided on our website.</li>
      </div>
    </div>
  )
}

export default PrivacyPolicy
