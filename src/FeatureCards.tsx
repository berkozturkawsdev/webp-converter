import "./LandingPage.css";


export default function FeatureCards() {

  const features = [
    {
      icon: "⚡",
      title: "Instant Conversion",
      text: "Convert images directly in your browser without waiting."
    },
    {
      icon: "🔒",
      title: "Private By Design",
      text: "Your images never get uploaded to a server."
    },
    {
      icon: "📦",
      title: "Batch Processing",
      text: "Convert hundreds of images in one click."
    }
  ];


  return (
    <section id="features" className="features">

      {
        features.map(feature => (
          <div 
            className="feature-card" 
            key={feature.title}
          >

            <div className="icon">
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.text}
            </p>

          </div>
        ))
      }

    </section>
  );
}