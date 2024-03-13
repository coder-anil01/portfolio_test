import React from 'react'

const DeliveryPolicy = () => {
  return (
    <div className='policy'>
      <div className="policy-container">
        <h1 className="policy-heading">Delivery Policy</h1>

        <div className="policy-title">Shipping Costs</div>
        <li className="policy-p">Shipping costs are calculated based on the weight of the package, shipping method selected, and destination. Additional charges such as taxes and customs duties may apply for international orders.</li>

        
        <div className="policy-title">Delivery</div>
        <li className="policy-p">Once your order has been processed and shipped, you will receive a tracking number to monitor the status of your delivery. We are not responsible for delays or issues caused by the shipping carrier.</li>

        <div className="policy-title">International Shipping</div>
        <li className="policy-p">International orders may be subject to customs clearance procedures and import duties. These additional charges are the responsibility of the recipient and are not included in the shipping cost.</li>
      </div>
    </div>
  )
}

export default DeliveryPolicy;
