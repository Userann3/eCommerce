import React from 'react'

export default function Faq() {
  return (
    <>
        {/* -------------------------------------------- FAQ */}
        <div className="faq container d-flex justify-content-center mt-5">
    <div className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-item border">
    <input type="checkbox" id="q1" />
    <label htmlFor="q1" className="faq-question">
      What is your return policy?
    </label>
    <div className="faq-answer">
      <p>
        Our return policy lasts for 30 days. If 30 days have gone by since your
        purchase, we cannot offer a refund or exchange.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q2" />
    <label htmlFor="q2" className="faq-question">
      How do I track my order?
    </label>
    <div className="faq-answer">
      <p>
        You will receive an email with tracking information once your order has
        been shipped.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q3" />
    <label htmlFor="q3" className="faq-question">
      Can I purchase items in bulk?
    </label>
    <div className="faq-answer">
      <p>
        Yes, bulk purchases are available. Please contact our sales department
        for more details.
      </p>
    </div>
  </div>
  <div className="faq-item">
    <input type="checkbox" id="q4" />
    <label htmlFor="q4" className="faq-question">
      Do you ship internationally?
    </label>
    <div className="faq-answer">
      <p>
        Yes, we ship internationally. Shipping rates will be calculated at
        checkout.
      </p>
    </div>
  </div>
</div>


            </div>
{/* -------------------------------------------------FAQ END */}

    </>
  )
}
