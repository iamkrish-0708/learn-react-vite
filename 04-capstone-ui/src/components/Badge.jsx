function Badge({ children, type = "neutral" }) {
    let bg = "#E5E7EB";
    let txt = "#374151";

    if (type === "success") {
        bg = "#DCFCE7";
        txt = "#166534";
    } else if (type === "warning") {
        bg = "#FEF3C7";
        txt = "#92400E";
    } else if (type === "danger") {
        bg = "#FEE2E2";
        txt = "#991B1B";
    } else if (type === "neutral") {
        bg = "#E5E7EB";
        txt = "#374151";
    }

    return (
        <span style={{
            backgroundColor: bg,
            color: txt,
            padding: "4px 10px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "600",
            display: "inline-block"
        }}>
            {children}
        </span>
    );
}

export default Badge;
