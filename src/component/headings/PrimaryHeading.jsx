import './heading.css';

export default function PrimaryHeading(props){
    return (
        <h1 className="text-center text-uppercase mt-4 mb-2 primaryHeading">{props.title}</h1>
    );
}
