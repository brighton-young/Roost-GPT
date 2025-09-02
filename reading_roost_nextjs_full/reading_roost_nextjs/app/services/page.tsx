export const metadata = { title: "Services — The Reading Roost" };
export default function ServicesPage(){
  return (<main className="wrap" style={{padding:'2rem 0'}}>
    <h1>Services</h1>
    <div className="cards" style={{marginTop:'1rem'}}>
      <article className="card"><h3>1:1 Reading Intervention</h3><p>Structured literacy: phonemic awareness, phonics, fluency, vocabulary, comprehension.</p></article>
      <article className="card"><h3>Small‑Group Literacy</h3><p>2–4 learners; leveled materials; stations; collaborative practice.</p></article>
      <article className="card"><h3>Assessments</h3><p>Screeners, diagnostics, and curriculum‑based measures.</p></article>
      <article className="card"><h3>IEP/504 Collaboration</h3><p>Parent coaching, accommodations, and meeting prep.</p></article>
      <article className="card"><h3>School Partnerships</h3><p>PD, coaching, co‑teaching, MTSS/RTI alignment.</p></article>
      <article className="card"><h3>Family Coaching</h3><p>At‑home routines and strategies.</p></article>
    </div>
  </main>);
}
