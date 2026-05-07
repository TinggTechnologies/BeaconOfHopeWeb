
const RefundPolicy = () => {
  return (
    <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Refund Policy
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          1. Overview
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          At Beacon of Hope, we are committed to ensuring customer satisfaction. If you are not satisfied
          with our service, we offer a comprehensive refund policy as outlined below.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          2. Refund Eligibility
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          Refunds will be considered for the following circumstances:
        </p>
        <ul className="list-disc list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
          <li>Service not rendered as described or promised</li>
          <li>Duplicate billing or billing errors</li>
          <li>Technical issues that prevented service delivery</li>
          <li>Unauthorized charges</li>
          <li>Service requested to be cancelled within 24 hours of purchase (for eligible services)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          3. Refund Process
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          To request a refund, please follow these steps:
        </p>
        <ol className="list-decimal list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
          <li>Contact our customer support team within 30 days of the transaction</li>
          <li>Provide your order number and reason for the refund request</li>
          <li>Provide any relevant documentation or evidence supporting your claim</li>
          <li>Our team will review your request and respond within 5-7 business days</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          4. Refund Timeline
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          Once a refund is approved:
        </p>
        <ul className="list-disc list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
          <li>Refunds will be processed within 7-10 business days</li>
          <li>The refund will be credited to the original payment method</li>
          <li>Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to appear in your account</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          5. Non-Refundable Items
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          The following items/services are generally non-refundable:
        </p>
        <ul className="list-disc list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
          <li>Services already fully rendered or completed</li>
          <li>Purchases made after the initial 24-hour refund window</li>
          <li>Items or services purchased as final sales</li>
          <li>Charges incurred due to customer error or misuse</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          6. Partial Refunds
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          In cases where a service has been partially rendered or utilized, Beacon of Hope reserves
          the right to issue a partial refund based on the proportion of service utilized versus the
          total service value.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          7. Disputes
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          If you dispute a charge with your credit card company or bank (chargeback), Beacon of Hope
          reserves the right to dispute the chargeback and may pursue collection of the disputed amount.
          We recommend contacting our support team before initiating a chargeback.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          8. Contact Information
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          For refund inquiries, please contact us at:
          <br />
          Email: support@beaconofhopecooperative.com.ng
          <br />
          Support Center: [Your Support URL]
          <br />
          Response Time: 5-7 business days
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
          9. Policy Changes
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          Beacon of Hope reserves the right to modify this refund policy at any time. Changes will be
          posted on this page and will become effective immediately.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
