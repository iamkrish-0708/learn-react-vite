// function App() {
//   return (
//     <div>
//       <h1>THIS IS THE FIRST REACT PROGRAM.</h1>
//       <hr />
//       <p>HONESTLY REACT SEEMS COMPLICATED AT START AS USUAL IT SHOULD BE IN START OF ANYTHING NEW.</p>
//       <ProfileCard/>
//       <ProfileCard/>
//     </div>
//   );
// }

// function ProfileCard() {
//   return (
//     <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px', margin: '10px 0' }}>
//       <h2>Krish</h2>
//       <p>Target: Summer 2027 SWE Intern</p>
//       <button>Connect</button>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Developer Directory</h1>
      <ProfileCard 
        name="Elon Musk" 
        role="AI Engineer" 
        college="VJTI" 
        isAvailable={true}
        skills={"Artificial Intelligence"}
      />
      <ProfileCard 
        name="Sam Altman" 
        role="Full Stack Engineer" 
        college="IIT Bombay" 
        isAvailable={false}
        skills={"React,Node,Next,Express,MongoDB"}
      />
    </div>
  );
}

function ProfileCard({ name, role, college ,isAvailable,skills}) {
  return (
    <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px', margin: '10px 0' }}>
      <h2>{name}</h2>
      <p>Target: {role}</p>
      <p>Institution: {college}</p>
      <p>Skills: {skills}</p>
      {isAvailable ? <span>Status : 🟢 Available</span> : <span>Status : 🔴 Busy</span>}
      <br />
      {isAvailable && <button style={{marginTop:'5px'}}>Connect</button>}
    </div>
  );
}

export default App;