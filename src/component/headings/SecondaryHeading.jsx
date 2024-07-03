import './heading.css';

export default function SecondaryHeading(props){
    return (
        <h3 className='text-center secondaryClass mb-4 text-uppercase'>{props.title}</h3>
    );
}