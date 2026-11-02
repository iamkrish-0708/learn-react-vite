function Badge({children,type}){

    let bgColor = "#e2e8f0";
    let textColor = "#1e293b";

    if (type === "success") {
    bgColor = "#dcfce7"; // light green
    textColor = "#15803d";
  } else if (type === "danger") {
    bgColor = "#fee2e2"; // light red
    textColor = "#b91c1c";
  }
    else if(type === "warning"){
     bgColor = "#fef3c7";
     textColor = "#b91c1c";
    }

    return(
        <span style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: "4px 10px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "bold",
      display: "inline-block"
    }}>
      {children}
    </span>
    );
}
    
export default Badge
