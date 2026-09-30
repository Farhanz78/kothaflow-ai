export function StatCard({label,value,delta}:{label:string,value:string,delta?:string}) {
  return <div className="stat"><div className="stat-label">{label}</div><div className="stat-value">{value}</div>{delta && <div className="stat-delta">{delta}</div>}</div>;
}
