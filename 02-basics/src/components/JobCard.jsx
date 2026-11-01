function JobCard({ title, company, location, stipend, isRemote }) {
  return (
    <div style={{border:'solid',borderColor:'black',margin:'10px',paddingLeft:'10px',borderRadius:'5px'}}>
      <h3>Title : {title}</h3>
      <h4>Company : {company}</h4>
      <p>Location : {location}</p>
      <p>Stipend : ₹{stipend}</p>
      {isRemote ? <span>🌐 Remote Friendly</span> : <span>🏢 On-Site Only</span>}
      <br />
      <button style={{margin:'10px',padding:'5px',backgroundColor:'red',color:'yellow',border:'solid',borderColor:'black'}}>APPLY NOW</button>
    </div>
  );
}

export default JobCard