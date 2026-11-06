import Badge from "./Badge";
import Button from "./Button";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>DevPulse SaaS</h2>
                <Badge type="success">v1.0 Live</Badge>
            </div>

            <div className="navbar-actions">
                <Button variant="outline">Docs</Button>
                <Button variant="primary">Get Started</Button>
            </div>
        </nav>
    );
}

export default Navbar;
