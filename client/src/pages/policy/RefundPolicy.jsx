import React from 'react'

const RefundPolicy = () => {
  return (
    <div className='policy'>
      <div className="policy-container">
        <h1 className="policy-heading">Refund Policy</h1>

        <div className="policy-title">Refund Process</div>
        <li className="policy-p">Steps users must follow to request a refund.</li>
        <li className="policy-p">Timeframe for processing refund requests.</li>

        
        <div className="policy-title">Exceptions</div>
        <li className="policy-p">The product/service has been used or consumed.</li>
        <li className="policy-p">The request for a refund is made after the specified timeframe.</li>
        <li className="policy-p">The product/service is non-refundable according to its terms and conditions.</li>
      </div>
    </div>
  )
}

export default RefundPolicy
