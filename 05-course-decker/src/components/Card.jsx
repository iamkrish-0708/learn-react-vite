function Card({children,hot=false}){
    let bc = hot ? "#FF6600" : "white";
    return(   
        <div className="card" style={{ borderColor: bc, width: "280px" }}>
            {children}
        </div>
    );
}

export default Card