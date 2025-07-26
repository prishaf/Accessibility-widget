export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Commitment</h2>
            <p className="text-gray-700">
              We are committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Accessibility Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode</li>
              <li>Adjustable text size and spacing</li>
              <li>Animation controls</li>
              <li>Alternative text for images</li>
              <li>Semantic HTML structure</li>
              <li>ARIA labels and descriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Standards Compliance</h2>
            <p className="text-gray-700">
              This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These
              guidelines explain how to make web content accessible to people with a wide array of disabilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Feedback</h2>
            <p className="text-gray-700">
              We welcome your feedback on the accessibility of this website. Please let us know if you encounter
              accessibility barriers or have suggestions for improvement.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
