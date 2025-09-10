/* Generated from SiteSpec */
import SimpleCentered from "@/sections/SimpleCentered";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";
import WithTestimonial from "@/sections/WithTestimonial";

export default function home(){
  return (<main>
    <SimpleCentered {...{
  headline: "Achieve Your Best with Victory Test",
  subhead: "Empowering you to reach new heights in performance and confidence.",
  imageUrl: "https://example.com/victory-test-image.jpg",
  primaryCta: {
    text: "Get Started Now",
    href: "/get-started"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/about"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Key Features of Victory Test",
  subtitle: "Discover what sets us apart",
  items: [
    {
      title: "Comprehensive Testing",
      body: "Our platform offers a wide range of tests to ensure thorough evaluation.",
      icon: "check-circle"
    },
    {
      title: "User-Friendly Interface",
      body: "Navigate effortlessly with our intuitive design, perfect for all skill levels.",
      icon: "desktop"
    },
    {
      title: "Real-Time Results",
      body: "Get instant feedback and insights to make informed decisions quickly.",
      icon: "clock"
    },
    {
      title: "Expert Support",
      body: "Our dedicated team is here to assist you every step of the way.",
      icon: "headset"
    }
  ]
}} />
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Flexible pricing to fit your needs",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$19",
        annually: "$199"
      },
      description: "Perfect for individuals getting started.",
      features: [
        "Access to basic features",
        "Email support",
        "Community access"
      ],
      mostPopular: false
    },
    {
      name: "Pro",
      id: "pro-plan",
      href: "/pricing/pro",
      price: {
        monthly: "$49",
        annually: "$499"
      },
      description: "Ideal for small teams and professionals.",
      features: [
        "All Basic features",
        "Priority support",
        "Advanced analytics"
      ],
      mostPopular: true
    },
    {
      name: "Enterprise",
      id: "enterprise-plan",
      href: "/pricing/enterprise",
      price: {
        monthly: "$99",
        annually: "$999"
      },
      description: "Comprehensive solutions for large organizations.",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom integrations"
      ],
      mostPopular: false
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "What Our Customers Are Saying",
  subhead: "Real stories from real users",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Share Your Experience",
    href: "/share"
  }
}} />
  </main>);
}
