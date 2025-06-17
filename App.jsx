
import { motion } from "framer-motion";

const Card = ({ children, className }) => <div className={`rounded-xl bg-white shadow-md ${className}`}>{children}</div>;
const CardContent = ({ children, className }) => <div className={`p-4 ${className}`}>{children}</div>;
const Button = ({ children, className }) => <button className={`px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 shadow ${className}`}>{children}</button>;
const Badge = ({ children }) => <span className="inline-block px-2 py-1 border border-sky-200 bg-sky-50 text-sm rounded">{children}</span>;

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-blue-50 min-h-screen text-gray-900 p-6 space-y-12 font-sans">
      <motion.header 
        className="text-center space-y-2"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}>
        <h1 className="text-5xl font-extrabold text-sky-800">Jayateja Challagundla</h1>
        <h2 className="text-xl text-gray-600 font-medium">Senior Data Engineer</h2>
        <div className="text-sm text-gray-500">
          <p>Email: <a href="mailto:jayac24195@gmail.com" className="underline">jayac24195@gmail.com</a> | Phone: (913) 585-5129</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/jayach1947" className="underline">linkedin.com/in/jayach1947</a></p>
        </div>
      </motion.header>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Card className="shadow-lg bg-white border border-blue-100">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold text-sky-700">Professional Summary</h3>
            <p className="leading-relaxed text-gray-700">
              Experienced Data Engineer with 9+ years of experience in building scalable data pipelines on AWS and Azure, with extensive experience in Big Data, BI, real-time streaming, and cloud architecture. Expertise in PySpark, Airflow, SQL, and ETL design.
            </p>
          </CardContent>
        </Card>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Card className="shadow-lg bg-white border border-blue-100">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold text-sky-700">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
              <Badge>Python</Badge>
              <Badge>Scala</Badge>
              <Badge>SQL / T-SQL</Badge>
              <Badge>AWS / Azure</Badge>
              <Badge>Spark / Hadoop / Kafka</Badge>
              <Badge>Informatica / Glue / Airflow</Badge>
              <Badge>MongoDB / Cassandra / DynamoDB</Badge>
              <Badge>Power BI / Tableau</Badge>
              <Badge>Snowflake / RBAC / IAM</Badge>
              <Badge>Git / Jenkins / CI-CD</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h3 className="text-3xl font-semibold mb-4 text-sky-700">Professional Experience</h3>
        <div className="space-y-6">

          {[{company: "Fifth Third Bank", location: "Cincinnati, Ohio", period: "Aug 2023 – Present", title: "Senior Data Engineer", points: [
            "Designed and scaled data pipelines using Azure Blob, Data Lake, and Logic Apps.",
            "Built predictive models using PySpark MLlib and automated ETL pipelines with Informatica.",
            "Integrated Hadoop ecosystem and secured PostgreSQL with RBAC.",
            "Maintained CI/CD pipelines with GitHub Actions and Jenkins."
          ]}, {
            company: "Macy's", location: "New York, NY", period: "May 2020 – Jul 2023", title: "Senior Data Engineer", points: [
            "Used AWS Glue and Lake Formation for secure analytics pipelines.",
            "Developed Spark and Tableau-based solutions with row-level security.",
            "Wrote PL/pgSQL and optimized Snowflake ETL processes."
          ]}, {
            company: "Max Healthcare", location: "New Delhi, India", period: "Oct 2017 – Mar 2020", title: "Data Engineer", points: [
            "Implemented scalable Azure and Spark pipelines using Kafka and MapReduce.",
            "Built Power BI dashboards with DAX, performance-tuned SQL workloads."
          ]}, {
            company: "Tata AIA Life Insurance", location: "Mumbai, India", period: "Jun 2015 – Sep 2017", title: "Data Analyst", points: [
            "Managed AWS-based pipelines and IAM policies.",
            "Automated Tableau, SAS, and Excel workflows for data storytelling."
          ]}].map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.2 }}>
              <Card className="shadow bg-white border border-gray-100">
                <CardContent className="p-6 space-y-2">
                  <div className="text-xl font-bold text-sky-800">{exp.company} | {exp.title}</div>
                  <div className="text-sm italic text-gray-500">{exp.location} | {exp.period}</div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section className="text-center pt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Button>
          <a href="mailto:jayac24195@gmail.com">Contact Me</a>
        </Button>
      </motion.section>
    </div>
  );
}
