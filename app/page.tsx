import AccessibilityWidget from "@/components/accessibility-widget"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Content with Animations */}
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Accessibility Widget Demo</h1>
          <p className="text-lg text-gray-600 animate-slide-up">
            This page demonstrates the comprehensive accessibility widget. Click the floating button in the bottom-right
            corner to access all accessibility features.
          </p>
        </header>

        {/* Animated Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-8 animate-gradient">
          <h2 className="text-2xl font-bold mb-2">🎉 Animated Banner</h2>
          <p>This banner has a moving gradient background - try the "Pause Animations" feature!</p>
        </div>

        {/* Spinning Loading Icon */}
        <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <span>Loading spinner - will stop when animations are paused</span>
        </div>

        {/* Bouncing Elements with Blue Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg animate-bounce-slow">
            <h3 className="text-lg font-semibold mb-2">Bouncing Card 1</h3>
            <p className="text-blue-100">This card bounces up and down with a beautiful blue gradient</p>
          </div>
          <div
            className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg animate-bounce-slow"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-lg font-semibold mb-2">Bouncing Card 2</h3>
            <p className="text-blue-100">This card bounces with a delay and blue-indigo gradient</p>
          </div>
          <div
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg animate-bounce-slow"
            style={{ animationDelay: "1s" }}
          >
            <h3 className="text-lg font-semibold mb-2">Bouncing Card 3</h3>
            <p className="text-blue-100">This card bounces with more delay and blue-purple gradient</p>
          </div>
        </div>

        {/* Pulsing Button */}
        <div className="text-center mb-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg animate-pulse text-lg font-semibold transition-all duration-300 hover:scale-105">
            Pulsing Call-to-Action Button
          </button>
        </div>

        {/* Sliding Text */}
        <div className="bg-yellow-100 p-6 rounded-lg mb-8 overflow-hidden">
          <div className="animate-slide-right">
            <h3 className="text-xl font-bold text-yellow-800">📢 Sliding Announcement</h3>
            <p className="text-yellow-700">This text slides in from the left continuously</p>
          </div>
        </div>

        <main className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Content</h2>
            <p className="text-gray-700 mb-4">
              This is sample content to test the accessibility features. You can adjust text size, spacing, contrast,
              and more using the accessibility widget.
            </p>
            <p className="text-gray-700 mb-4">
              <a
                href="#"
                className="text-blue-600 hover:underline transition-colors duration-200"
                title="This is a sample link"
              >
                This is a sample link with hover transition
              </a>{" "}
              that you can highlight using the accessibility controls.
            </p>
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Sample image for accessibility testing"
              className="rounded-lg shadow-md mb-4 hover:scale-105 transition-transform duration-300"
            />
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Animation Features to Test</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Gradient background animation on the banner</li>
              <li>Spinning loading indicator</li>
              <li>Bouncing cards with blue gradients and staggered delays</li>
              <li>Pulsing call-to-action button</li>
              <li>Sliding text announcement</li>
              <li>Hover transitions on links and images</li>
              <li>Scale effects on button hover</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded">
              💡 <strong>Try this:</strong> Enable "Pause Animations" in the accessibility widget to see all these
              animations stop instantly!
            </p>
          </section>
        </main>
      </div>

      {/* Accessibility Widget */}
      <AccessibilityWidget />
    </div>
  )
}
