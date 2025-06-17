
import { motion } from "framer-motion";

const Card = ({ children, className }) => <div className={`rounded-xl bg-white shadow-md ${className}`}>{children}</div>;
const CardContent = ({ children, className }) => <div className={`p-4 ${className}`}>{children}</div>;
const Button = ({ children, className }) => <button className={`px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 shadow ${className}`}>{children}</button>;
const Badge = ({ children }) => <span className="inline-block px-2 py-1 border border-sky-200 bg-sky-50 text-sm rounded">{children}</span>;

// ... (shortened for brevity)
export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-blue-50 min-h-screen text-gray-900 p-6 space-y-12 font-sans">
      <motion.header className="text-center space-y-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl font-extrabold text-sky-800">Jayateja Challagundla</h1>
        <h2 className="text-xl text-gray-600 font-medium">Senior Data Engineer</h2>
        <div className="text-sm text-gray-500">
          <p>Email: <a href="mailto:jayac24195@gmail.com" className="underline">jayac24195@gmail.com</a> | Phone: (913) 585-5129</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/jayach1947" className="underline">linkedin.com/in/jayach1947</a></p>
        </div>
      </motion.header>
    </div>
  );
}
