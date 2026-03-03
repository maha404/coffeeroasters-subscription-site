
interface props {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button (props : props) {
    return (
       <button onClick={props.onClick} className={props.disabled ? "disabled button" : "primary button"}>{props.text}</button>  
    );
}