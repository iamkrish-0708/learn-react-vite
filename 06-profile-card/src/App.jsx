import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css"

const profiles = [
    {
        id:"1",
        name:"Sam Altman",
        age:"44",
        role:"AI Engineer",
        company:"OpenAI",
        profileImg:"/image1.png"
    },
    {
        id:"2",
        name:"Elon Musk",
        age:"49",
        role:"Project Manager",
        company:"SpaceX",
        profileImg:"/image2.png"
    },
    {
        id:"3",
        name:"Mark Zuckerberg",
        age:"40",
        role:"Frontend Engineer",
        company:"Meta",
        profileImg:"/image3.png"
    },
    {
        id:"4",
        name:"Sundar Pichai",
        age:"47",
        role:"CEO",
        company:"Google",
        profileImg:"/image4.png"
    }
];

function App(){
 return (
    <div className="profiles">
        {
            profiles.map((profile)=>(
                <Card key={profile.id}>
                    <img src={profile.profileImg} alt="PROFILE PICTURE" />
                    <h3><span id="name">Name :</span> {profile.name}</h3>
                    <p id="age"><span id="ageT">Age :</span> {profile.age} years old</p>
                    <p id="role"><span id="roleT">Role :</span> {profile.role}</p>
                    <p id="company"><span id="comp">Company :</span> {profile.company}</p>
                    <Button>View Profile</Button>
                </Card>
            ))
        }
    </div>
 );
}

export default App