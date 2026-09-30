import { StatCard } from "@/components/stat-card";
export default function Dashboard() {
  return <><div className="page-title"><div><h1>Operations overview</h1><p>Realtime health, call outcomes, and usage across your workspace.</p></div><button className="btn primary">+ New agent</button></div>
  <div className="stats"><StatCard label="Calls today" value="128" delta="+18% vs yesterday"/><StatCard label="Resolution rate" value="78.4%" delta="+4.2% this week"/><StatCard label="Avg. latency" value="612 ms" delta="target < 800 ms"/><StatCard label="Estimated cost" value="$9.84" delta="7.7¢ / minute"/></div>
  <div className="panel"><h3>Recent calls</h3><table><thead><tr><th>Caller</th><th>Agent</th><th>Intent</th><th>Duration</th><th>Outcome</th></tr></thead><tbody>{[
    ["+880 17••• 4821","Reception Agent","Appointment","3:22","Booked"],
    ["+880 18••• 1274","Support Agent","Order status","1:48","Resolved"],
    ["+880 16••• 8440","Sales Agent","Pricing","4:11","Lead created"],
    ["+880 19••• 2209","Reception Agent","Complex complaint","2:36","Transferred"],
  ].map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{j===4?<span className={c==="Transferred"?"status warn":"status"}>{c}</span>:c}</td>)}</tr>)}</tbody></table></div></>;
}
