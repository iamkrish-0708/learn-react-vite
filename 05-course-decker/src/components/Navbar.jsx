import Badge from "./Badge"
import Button from "./Button"

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Test Platform</h2>
                <Badge >Version 1</Badge>
            </div>

            <div className="navbar-actions">
                <Button >Sign Up</Button>
                <Button >Login</Button>
            </div>
        </nav>
    );
}

export default Navbar