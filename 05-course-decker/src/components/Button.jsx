function Button({children,type="default"}){

    let c = "default";
    if (type === "hot") {
        c = "hot";
    } else if (type === "new") {
        c = "new";
    }
    
    return (
        <button className={c}>
            {children}
        </button>
    );
}

export default Button