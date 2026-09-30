import Link from "next/link";
import { Bot, BookOpen, CreditCard, LayoutDashboard, Link2, Phone, PhoneCall } from "lucide-react";

const links = [
  ["Overview","/dashboard",LayoutDashboard],
  ["Agents","/dashboard/agents",Bot],
  ["Calls","/dashboard/calls",PhoneCall],
  ["Knowledge","/dashboard/knowledge",BookOpen],
  ["Numbers","/dashboard/numbers",Phone],
  ["Integrations","/dashboard/integrations",Link2],
  ["Billing","/dashboard/billing",CreditCard],
] as const;

export function Sidebar() {
  return <aside className="sidebar"><Link href="/" className="logo"><span className="logo-mark">K</span>KothaFlow AI</Link><nav className="sidebar-nav">{links.map(([label,href,Icon])=><Link key={href} className="sidebar-link" href={href}><Icon size={17}/>{label}</Link>)}</nav></aside>;
}
