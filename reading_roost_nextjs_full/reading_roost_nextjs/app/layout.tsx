import "../styles/globals.css";
export const metadata = {
  title: "The Reading Roost — Educational Services",
  description: "Evidence-based reading interventions, IEP collaboration, and Jon Peterson Scholarship support in Ohio."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
