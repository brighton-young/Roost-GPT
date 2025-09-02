import Image from "next/image";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Page() {
  const slides = [
    { src: "/testimonials/1000012998.jpg", quote: "Thank you so much for all of your help with our child’s IEP.", author: "Parent Note" },
    { src: "/testimonials/1000012999.jpg", quote: "You have inspired her to write stories and enjoy writing.", author: "Family Christmas Card" },
    { src: "/testimonials/20250829_105932.jpg", quote: "You saved the day—thank you for sharing your expertise!", author: "Colleague" }
  ] as const;

  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <div className="brand">
            <Image className="logo" src="/logo.png" alt="The Reading Roost logo" width={36} height={36} />
            <strong>The Reading Roost</strong>
          </div>
          <nav className="nav">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/resources">Resources</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/contact" className="cta">Book a Call</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{backgroundImage: "url(/jpsn_flyer.jpg)"}}>
        <div className="wrap hero-grid">
          <div>
            <h1>Reading Confidence Starts Here</h1>
            <p>The Reading Roost Handbook for Intervention Services
Mission:
At The Reading Roost Educational Services, our mission is to create a nurturing and inclusive environment where every child—regardless of ability—can grow, thrive, and discover the joy of learning. We provide individualized, evidence-based support in both literacy and mathematics for students with diverse learning needs. Through compassionate instruction, we empower each learner with the tools, confidence, and strategies they need to succeed.</p>
            <div style={{display:'flex',gap:'.6rem'}}>
              <a href="/contact" className="nav cta" style={{padding:'.6rem .9rem',borderRadius:'.8rem'}}>Free Discovery Call</a>
              <a href="/services" className="nav" style={{padding:'.55rem .8rem',border:'1px solid #e5e7eb',borderRadius:'.8rem'}}>Explore Services</a>
            </div>
            <ul className="muted" style={{listStyle:'none',display:'flex',gap:'1rem',padding:0,margin:'1rem 0 0'}}>
              <li><a href="mailto:readingroostedservices@gmail.com">readingroostedservices@gmail.com</a></li>
              <li><a href="tel:15132378618">513‑237‑8618</a></li>
            </ul>
          </div>
          <div>
            <Image src="/headshot.png" width={700} height={700} alt="Robin Rice, Intervention Specialist" />
          </div>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="wrap">
          <h2>Services</h2>
          <div className="cards">
            <article className="card"><h3>1:1 Reading Intervention (K–12)</h3><p>Explicit, systematic instruction targeting phonemic awareness, phonics, fluency, vocabulary, and comprehension.</p></article>
            <article className="card"><h3>Small‑Group Literacy Support</h3><p>Leveled groups (2–4 learners) with purposeful practice and multisensory activities.</p></article>
            <article className="card"><h3>Assessments & Progress Monitoring</h3><p>Screeners, diagnostics, CBMs to set goals and drive instruction.</p></article>
            <article className="card"><h3>IEP/504 Collaboration</h3><p>Parent coaching, accommodations, documentation support, and meeting prep.</p></article>
            <article className="card"><h3>School & District Partnerships</h3><p>PD, coaching, co‑teaching, and MTSS/RTI alignment.</p></article>
            <article className="card"><h3>Family Coaching</h3><p>At‑home reading routines and strategies.</p></article>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="wrap">
          <h2>Kind Words From Families</h2>
          <p className="muted">Drawn from handwritten notes and cards.</p>
          <TestimonialCarousel slides={slides} autoPlay intervalMs={5500} />
        </div>
      </section>

      <footer className="footer"><div className="wrap"><small>© 2025 The Reading Roost. All rights reserved.</small></div></footer>
    </>
  );
}
