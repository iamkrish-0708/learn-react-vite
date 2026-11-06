import Button from "./components/Button";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";

const features = [
    {
        id: 1,
        title: "Cloud Analytics",
        description: "Monitor your application performance and get real-time insights through powerful cloud analytics.",
        badgeText: "Active",
        badgeType: "success",
        isPopular: true
    },
    {
        id: 2,
        title: "Automated Backups",
        description: "Keep your data secure with automatic backups and reliable recovery whenever needed.",
        badgeText: "Recommended",
        badgeType: "warning",
        isPopular: false
    },
    {
        id: 3,
        title: "Instant Deployment",
        description: "Deploy your applications quickly with a streamlined and efficient deployment workflow.",
        badgeText: "New",
        badgeType: "neutral",
        isPopular: true
    }
];

function App() {
    return (
        <div>
            <Navbar />

            <main className="page-content">
                <header className="hero">
                    <h1>Modern Cloud Infrastructure for High-Velocity Teams</h1>
                    <p>
                        Scale your software operations with enterprise security, real-time observability,
                        and zero-friction deployments.
                    </p>
                </header>

                <div className="features-grid">
                    {features.map((feature) => (
                        <Card key={feature.id} highlight={feature.isPopular}>
                            <div className="card-header">
                                <Badge type={feature.badgeType}>{feature.badgeText}</Badge>
                                {feature.isPopular && (
                                    <span style={{ color: "#f59e0b", fontSize: "13px", fontWeight: "600" }}>
                                        ⭐ Popular
                                    </span>
                                )}
                            </div>

                            <h3 className="card-title">{feature.title}</h3>
                            <p className="card-desc">{feature.description}</p>

                            <div className="card-footer">
                                <Button variant={feature.isPopular ? "primary" : "outline"}>
                                    Explore Feature
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
