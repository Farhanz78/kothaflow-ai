import Link from "next/link";
import { ArrowRight, BarChart3, Bot, CalendarCheck, Globe2, Headphones, ShieldCheck } from "lucide-react";

const bars = [24, 43, 32, 62, 49, 76, 54, 88, 61, 42, 72, 36, 58, 81, 47, 67, 34, 53, 78, 44, 69];

export default function Home() {
  return (
    <main>
      <div className="container">
        <nav className="nav">
          <div className="logo"><span className="logo-mark">K</span>KothaFlow AI</div>
          <div className="nav-links">
            <a href="#features">Features</a><a href="#how">How it works</a><a href="#pricing">Pricing</a>
            <Link className="btn" href="/dashboard">Open dashboard</Link>
          </div>
        </nav>

        <section className="hero">
          <div>
            <span className="badge"><span className="pulse" /> Bangladesh-first. Global-ready.</span>
            <h1><span className="gradient">Human-like AI calls</span> that actually finish the job.</h1>
            <p>KothaFlow answers calls, understands Bangla and English, books appointments, qualifies leads, handles FAQs, updates your systems, and transfers to a human when needed.</p>
            <div className="hero-actions">
              <Link className="btn primary" href="/dashboard">Build your first agent <ArrowRight size={17}/></Link>
              <a className="btn ghost" href="#how">See the workflow</a>
            </div>
          </div>

          <div className="call-card">
            <div className="call-top">
              <div style={{display:"flex",gap:12,alignItems:"center"}}><div className="avatar">🎧</div><div><b>Reception Agent</b><div style={{color:"#9ca3af",fontSize:13}}>Dhaka Dental Care</div></div></div>
              <div className="live">● LIVE · 02:18</div>
            </div>
            <div className="wave">{bars.map((h,i)=><span key={i} style={{height:h}} />)}</div>
            <div className="transcript"><b style={{color:"#fff"}}>Caller:</b> আগামীকাল বিকেলে একটা appointment পাওয়া যাবে?<br/><br/><b style={{color:"#c4b5fd"}}>AI:</b> অবশ্যই। আমি availability check করছি — 4:30 PM আর 5:15 PM খালি আছে। কোনটা আপনার জন্য ভালো হবে?</div>
          </div>
        </section>
      </div>

      <section id="features" className="section">
        <div className="container">
          <h2>Everything a modern call team needs.</h2>
          <p className="section-lead">Built as a multi-tenant SaaS, not a one-off bot. Each business gets its own agents, knowledge, phone numbers, integrations, policies, analytics, and billing.</p>
          <div className="grid3">
            <Feature icon={<Bot/>} title="Natural voice agents" text="Low-latency turn taking, interruption handling, noise control, multilingual prompts, and provider routing." />
            <Feature icon={<Headphones/>} title="Human handoff" text="Transfer sensitive, angry, complex, or requested calls to a live person with context." />
            <Feature icon={<CalendarCheck/>} title="Real actions" text="Book appointments, create leads, check order status, trigger webhooks, and call business APIs." />
            <Feature icon={<Globe2/>} title="Bangla + global" text="Start with Bangladesh SIP and Bangla/English. Add international carriers and language packs later." />
            <Feature icon={<BarChart3/>} title="Call intelligence" text="Transcripts, outcomes, costs, summaries, sentiment, lead score, and QA flags in one dashboard." />
            <Feature icon={<ShieldCheck/>} title="Tenant-safe by design" text="Supabase RLS, scoped secrets, audit-friendly data model, webhook verification, and configurable retention." />
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <h2>Phone call → AI → action → measurable result.</h2>
          <p className="section-lead">Carrier/SIP routes the call into the realtime voice layer. The AI uses business knowledge and approved tools, then stores outcomes in KothaFlow for analytics and billing.</p>
          <div className="grid3">
            <Feature icon={<span>01</span>} title="Connect" text="Import a SIP number or connect a provider. Configure business hours, language, transfer rules, and disclosure." />
            <Feature icon={<span>02</span>} title="Teach" text="Add FAQs, services, prices, policies, website pages, and tool integrations. Test before going live." />
            <Feature icon={<span>03</span>} title="Operate" text="Receive or place calls, complete workflows, escalate safely, then review every outcome and cost." />
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container"><h2>Business model built for margin.</h2><p className="section-lead">Charge a platform subscription plus included minutes and overage. Keep telephony and AI provider costs visible internally, but sell the business outcome—not raw API minutes.</p></div>
      </section>
      <footer className="footer"><div className="container">KothaFlow AI · Working product name · 2026</div></footer>
    </main>
  );
}

function Feature({icon,title,text}:{icon:React.ReactNode,title:string,text:string}) {
  return <div className="feature"><div className="iconbox">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}
