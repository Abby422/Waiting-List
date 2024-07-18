import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Section from "./components/Section";
import OnboardingHeader from "./components/OnboardingHeader";
import logo from "./assets/logonew.svg";
import image1 from "./assets/onboardingImge4.png";
import image2 from "./assets/frame-6.svg";
import image3 from "./assets/beautyImage1.jpg";
import vector from "./assets/vector.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const handleJoinWaitlist = () => {
    navigate("/waiting-list");
  };

  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: "Exclusive Access",
      description:
        "Be notified when BIVA launches and gain early access to the platform",
    },
    {
      title: "Special Offers",
      description:
        "Enjoy launch discounts and exclusive benefits for early adopters.",
    },
    {
      title: "Be a Trendsetter",
      description:
        "Help shape the beauty industry's future by providing valuable feedback.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="flex flex-col">
      <OnboardingHeader logo={logo} />
      <main className="bg-purple py-8 md:py-12">
        <div className="px-4 md:px-36 flex flex-col md:flex-row items-center justify-around gap-0">
          <div className="mb-8 md:mb-0 flex justify-center md:block">
            <img
              src={vector}
              alt="Beauty Tools"
              className="w-64 md:w-80 h-64 md:h-80"
            />
          </div>
          <div className="flex flex-col items-center text-center md:text-left">
            <h1 className="text-xl md:text-3xl my-4 text-white leading-tight">
              Find Your Dream Beauty
              <br /> Experience or Talent
            </h1>
            <Button
              text="Join the Biva Waitlist"
              className="bg-black w-fit text-white rounded px-2 py-1 md:w-fit md:px-4 md:py-2 "
              onClick={() => {
                handleJoinWaitlist();
              }}
            />
          </div>
        </div>
      </main>

      <section className="bg-black py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="md:text-3xl text-red mb-8 text-left mx-16">
            What we offer to Beauty Enthusiasts
          </div>
          <Section
            title="Discover Your Perfect Beauty Experience with BIVA"
            content={[
              "Find beauty professionals and wellness services near you, all in one place.",
              "Read reviews, compare prices, and book appointments directly through BIVA.",
              "Explore a wide range of beauty services and professionals, tailored to your needs.",
            ]}
            image={image3}
          />
        </div>
      </section>

      <section className="bg-black py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="md:text-3xl text-red mb-8 text-left mx-16">
            What Biva offers Beauty Professionals
          </div>
          <Section
            title="Empower Your Beauty Career with BIVA"
            content={[
              "Find beauty and wellness jobs that match your skills and location, faster than ever.",
              "Showcase your talent and experience to potential employers with a stunning profile.",
              "Bypass agencies and connect with businesses seeking your expertise.",
            ]}
            image={image2}
            reverse
          />
        </div>
      </section>

      <section className="bg-black py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-3xl text-red mb-8 text-left mx-16">
            What Biva offers Businesses
          </h3>
          <Section
            title="Optimize Your Business Operations with BIVA"
            content={[
              "Search for qualified professionals based on specific skills and experience, saving you valuable time",
              "Simplify your hiring process and connect with the perfect fit for your needs.",
              "Manage your team and bookings all in one place, boosting efficiency.",
            ]}
            image={image1}
          />
        </div>
      </section>

      <section className="bg-black py-8 md:py-12">
        <div className="container mx-auto px-4 text-white flex flex-col items-center justify-center">
          <div className="md:text-3xl text-red mb-8 text-left mx-16">
            BIVA is launching soon, and we want YOU to be a part of it!
          </div>
          <div className="md:text-xl mb-8 text-center md:text-left">
            Join the Early Access Waitlist today and be among the first to
            experience the BIVA revolution!
          </div>
          <div className="text-base md:text-lg mb-8 text-center md:text-left">
            Here is what you get for joining the waitlist:
          </div>
          <div className="relative w-full max-w-lg overflow-hidden h-48 mx-auto">
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeCard * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-4 border flex flex-col items-center border-gray-500 rounded bg-tertiary text-white"
                >
                  <div className="flex items-center">
                    <p className="font-bold text-red">{card.title}</p>
                  </div>
                  <div className="mt-4">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:text-left mt-8">
            <span className="mb-4 font-semibold">
              Don't miss out! Secure your spot on the BIVA waitlist now!
            </span>
            <Button
              text="Join the Biva Waitlist"
              className="bg-red w-fit text-white rounded px-2 py-1 md:w-fit md:px-4 md:py-2"
              onClick={handleJoinWaitlist}
            />
          </div>
        </div>
      </section>

      <footer className="bg-tertiary py-8 md:py-12 text-white">
        <div className="container mx-auto flex flex-col md:flex-row px-4">
          <div className="flex-1 mb-8 md:mb-0">
            <img src={logo} alt="Biva Logo" className="h-8 mb-4" />
            <p>
              we are a beauty professional company that is aimed at connecting
              stakeholders in the beauty industry
            </p>
          </div>
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-lg md:text-xl text-red mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl text-red mb-4">Contact</h3>
            <p>Email: biva@gmail.com</p>
            <p>Phone: 0740354576</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
