import { Sidebar } from "@/components/sidebar";
export default function DashboardLayout({children}:{children:React.ReactNode}) { return <div className="dashboard"><Sidebar/><main className="dashboard-main">{children}</main></div>; }
