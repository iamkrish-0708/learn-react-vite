function Card({ children, highlight = false }) {
    const highlightStyle = highlight ? {
        borderColor: "#3b82f6",
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
    } : {};

    return (
        <div className="card" style={highlightStyle}>
            {children}
        </div>
    );
}

export default Card;
