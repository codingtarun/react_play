import Button from "react-bootstrap/Button";

export default function EnterButton({children, variant, onSelect }){

   

    return (
        <Button variant={variant} onClick={onSelect}>{children}</Button>
    );
}