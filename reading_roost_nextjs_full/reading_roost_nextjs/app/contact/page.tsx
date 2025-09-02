export const metadata = { title: "Book a Call — The Reading Roost" };
const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-calendly-slug/intro-call";
export default function ContactPage(){
  return (<main className="wrap narrow" style={{padding:'2rem 0'}}>
    <h1>Book a Discovery Call</h1>
    <div style={{position:'relative',paddingBottom:'62.5%',height:0,overflow:'hidden',border:'1px solid #e5e7eb',borderRadius:'12px'}}>
      <iframe title="Calendly Scheduler" src={CALENDLY} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}} />
    </div>
    <p style={{marginTop:'1rem'}}>Email: <a href="mailto:readingroostedservices@gmail.com">readingroostedservices@gmail.com</a> • Phone: <a href="tel:15132378618">513‑237‑8618</a></p>
  </main>);
}
