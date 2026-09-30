const agents=[
  {name:"Reception Agent",lang:"Bangla + English",use:"Inbound reception, booking, FAQ",status:"Live"},
  {name:"Support Agent",lang:"Bangla + English",use:"Order lookup, support triage",status:"Draft"},
  {name:"Sales Qualifier",lang:"English",use:"Lead qualification & callbacks",status:"Draft"},
];
export default function Agents(){return <><div className="page-title"><div><h1>Voice agents</h1><p>Create specialized agents with scoped tools and handoff rules.</p></div><button className="btn primary">+ Create agent</button></div><div className="cards">{agents.map(a=><div className="card" key={a.name}><div style={{display:"flex",justifyContent:"space-between"}}><b>{a.name}</b><span className={a.status==="Live"?"status":"status warn"}>{a.status}</span></div><p>{a.use}</p><div style={{color:"#c4b5fd",fontSize:13}}>{a.lang}</div><button className="btn" style={{marginTop:16}}>Configure</button></div>)}</div></>}
