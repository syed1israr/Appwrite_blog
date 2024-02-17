
import "./Button.css"
export default function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "text-white",
    className = "",
    
    ...props
}) {
    return (
        <button className={` ${bgColor} ${textColor} ${className}`} {...props} >
            {children}
        </button>
    );
}