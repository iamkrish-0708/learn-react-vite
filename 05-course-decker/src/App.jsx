import "./App.css"
import Badge from "./components/Badge"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

const courses = [
    {
        id: 1,
        title: "Git & Github",
        button: "default",
        description: "Learn Git and GitHub fundamentals, including version control, repositories, commits, branches, and collaboration.",
        badgeText: "Ongoing",
        badgeType: "default",
        isHot: false
    },
    {
        id: 2,
        title: "Learn React Vite",
        button: "hot",
        description: "Learn React fundamentals and use Vite to build, run, and manage fast modern web applications.",
        badgeText: "Starts Soon",
        badgeType: "fastfilling",
        isHot: true
    },
    {
        id: 3,
        title: "System Design",
        button: "new",
        description: "Learn how to design scalable, reliable, and efficient software systems using core system design concepts and architecture patterns.",
        badgeText: "Starts Soon",
        badgeType: "newly",
        isHot: true
    },
    {
        id: 4,
        title: "Analysis Of Algorithms",
        button: "default",
        description: "Learn algorithm design techniques, complexity analysis, and time and space efficiency to solve computational problems.",
        badgeText: "Completed",
        badgeType: "default",
        isHot: false
    }
];

function App(){
    return(
       <div>
            <Navbar />

            <main >
                <div className="card-container">
                    {courses.map((course) => (
                        <Card key={course.id} hot={course.isHot}>
                            <div >
                                <Badge type={course.badgeType}>{course.badgeText}</Badge>
                                {course.isHot && (
                                    <span style={{ color: "#f59e0b", fontSize: "13px", fontWeight: "600" }}>
                                        ⭐ Popular
                                    </span>
                                )}
                            </div>

                            <h3 >{course.title}</h3>
                            <p >{course.description}</p>

                            <div >
                                <Button type={course.button}>
                                    Explore Course
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App
