import JobCard from "./JobCard"
const jobs=[
    {id:1,title:"Chef",company:"Taj Hotel",location:"Mumbai",stipend:30000,isRemote:false},
    {id:2,title:"Frontend Developer",company:"TCS",location:"Thane",stipend:25000,isRemote:true},
    {id:3,title:"System Designer",company:"Flipkart",location:"Mumbai",stipend:45000,isRemote:true}
];

function JobRender() {
  return (
    <div>
      <h1 style={{textAlign:"center",textDecoration:'underline'}}>Job Board</h1>
      {jobs.map((job) => (
        <JobCard 
        key={job.id}
        title={job.title} 
        company={job.company} 
        location={job.location}
        stipend={job.stipend}
        isRemote={job.isRemote}
        />
      ))}
    </div>
  );
}

export default JobRender