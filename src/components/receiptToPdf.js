import React, { useRef, useEffect } from 'react';
import ReactToPdf from 'react-to-pdf';

function Receipt(props) {
  const { receipt } = props;

  const ref = useRef();

  useEffect(() => {
    const get = document.getElementById('btn');
    get.click();
  }, []);

  return (
    <div ref={ref} className='receipt-container'>
      <h2>{receipt.title}</h2>
      <div className="description-container">
        <p>{receipt.description}</p>
        <img src={receipt.logoURL} alt="logo" />
      </div>

      <div className='receipt-details'>
        <div className='receipt-billing'>
          <h4>Dirección de facturación</h4>
          <p>{receipt.billingAddress}</p>
        </div>

        <div className='receipt-customer'>
          <h4>Información del cliente</h4>
          <p>{receipt.firstname} {receipt.lastname}</p>
          <p>{receipt.documentType}: {receipt.documentNumber}</p>
        </div>

        <div className='receipt-payment'>
          <h4>Información de pago</h4>
          <p>{receipt.currency} {receipt.amount}</p>
        </div>
      </div>
      <ReactToPdf targetRef={ref} filename="receipt.pdf" scale={0.8}>
        {({ toPdf }) => (
          <button id="btn" onClick={toPdf} style={{ display: "none" }}>Download PDF</button>
        )}
      </ReactToPdf>
    </div >
  );
}

export default Receipt;