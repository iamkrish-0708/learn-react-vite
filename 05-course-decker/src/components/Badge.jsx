function Badge({children,type="default"}){
    
    let bg = "#E5E7EB";
    let txt = "#374151";
    if (type === "fastfilling") {
        bg = "#FEF3C7";
        txt = "#92400E";
    } else if (type === "newly") {
        bg = "#DCFCE7";
        txt = "#166534";
    }
    
    return(
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
    )
}

export default Badge