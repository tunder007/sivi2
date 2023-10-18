import React from "react";
import './App.css';

function App() {

  const skills = [
    {
        category: "Programming Languages",
        items: ["C/C++", "JavaScript", "Java", "Python", "Haskell", "PHP"],
    },
    {
        category: "Frontend",
        items: ["HTML/CSS", "ReactJS", "Tailwind CSS"],
    },
    {
        category: "Database",
        items: ["MySQL", "ExpressJS", "Sequelize"],
    },
    {
        category: "Other",
        items: ["Strong algorithmic skills", "continuous learning mindset"],
    },
];

const transposedSkills = skills[0].items.map((_, index) => {
    return skills.map((skill) => skill.items[index]);
});
  
  return (
    <div className="bg-gradient-to-r from-blue-400 via-green-500 to-blue-500 p-5">
      <div className="container mx-auto bg-white p-10 rounded-lg shadow-lg font-serif text-xl">
        <div className="flex justify-between items-center min-w-80 m-10 mt-0 p-3 border-b border-gray-500">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold mb-2 text-blue-500">Tudor Christian Damian</h1>
            <p className="text-gray-500 text-sm">Born on November 4, 2003, in Romania</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-500 text-sm">Drumul Taberelor</p>
            <p className="text-gray-500 text-sm">Bucharest, Romania</p>
            <a href="tel:+40771070201" className="text-gray-500 text-sm">Phone: +40771070201</a>
            <a href="mailto:damian.tudor03@gmail.com" className="text-gray-500 text-sm">Email: damian.tudor03@gmail.com</a>
          </div>
        </div>

        <section className="mb-4">
          <h2 className="text-3xl font-semibold text-green-500">Education</h2>
          <div className="mt-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-500">Technical University of Delft (T.U. Delft), Netherlands</h3>
                <p className="text-gray-700 text-lg">Studied from 2022 to 2023</p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-blue-500">Universitatea Romano-Americana, Romania</h3>
                <p className="text-gray-700 text-lg">Current University</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text-green-500">Skills</h2>
          <table className="table-fixed w-full">
            <thead>
              <tr>
                {skills.map((skill) => (
                  <th key={skill.category} className="px-4 py-2 text-left text-blue-500">{skill.category}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transposedSkills.map((skill, index) => (
                <tr key={index}>
                  {skill.map((item, index) => (
                    <td key={index} className="border px-4 py-2 text-lg text-gray-700">{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="flex flex-col p-4 mb-10">
          <h2 className="text-2xl font-bold mb-2 text-green-500">Languages</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Romanian (Native)</li>
            <li>English (C2)</li>
            <li>Spanish (B1)</li>
            <li>Dutch (A1)</li>
          </ul>
        </div>

        <section className="mb-4">
          <h2 className="text-3xl font-semibold text-green-500">Professional Experience</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-blue-500">Founder, SOFTENEERS S.R.L.</h3>
            <p className="text-gray-700 text-lg">2021 - Present</p>
            <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
              <li className="text-sm">Founded and managed a dynamic software development company based in Romania.</li>
              <li className="text-sm">Provided a wide range of software services across various fields of computer science and programming.</li>
              <li className="text-sm">Developed tailor-made software solutions to meet the unique needs of clients.</li>
              <li className="text-sm">Designed and built responsive, user-friendly web and mobile applications using ReactJS and Tailwind CSS.</li>
              <li className="text-sm">Created robust and efficient databases using MySQL and ExpressJS.</li>
              <li className="text-sm">Offered consultancy services to help clients identify and solve complex technical challenges.</li>
              <li className="text-sm">Provided innovative solutions using strong algorithmic skills and continuous learning mindset.</li>
              <li className="text-sm">Committed to quality, innovation, and client satisfaction.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;

