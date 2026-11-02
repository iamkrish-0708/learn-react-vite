import Badge from "./components/Badge"
import Card from "./components/Card"
import"./App.css";

function App(){
    return(
        <div className="Card-container">
        <Card>
            <h3>Course Title: "Full Stack MERN Bootcamp"</h3>
            <hr />
            <Badge type="success">Enrollment Open</Badge>
            <p>Learn full-stack web development using MongoDB, Express.js, React.js, and Node.js. Build dynamic web applications, develop REST APIs, manage databases, and gain practical experience in modern web technologies.</p>
            <button className="btn">Enroll</button>
        </Card>

        <Card>
            <h3>Course Title: "Marathi Traditional Song Singing"</h3>
            <hr />
            <Badge type="success">Enrollment Open</Badge>
            <p>Explore the rich cultural heritage of Maharashtra through traditional Marathi songs. Learn regional melodies, improve vocal techniques, understand musical expressions, and develop confidence in singing.</p>
            <button className="btn">Enroll</button>
        </Card>

        <Card>
            <h3>Alert Title: "High Traffic"</h3>
            <hr />
            <Badge type="warning">Crowded</Badge>
            <p>The platform is currently experiencing high traffic, which may cause slower loading times or temporary service delays. Please be patient while we work to maintain smooth performance..</p>
        </Card>

        <Card>
            <h3>Alert Title: "Server Maintenance"</h3>
            <hr />
            <Badge type="danger">High Priority</Badge>
            <p>The server will undergo scheduled maintenance to improve performance, enhance security, and ensure system stability. Some services may be temporarily unavailable during this period.</p>
        </Card>
        </div>
    );
}

export default App