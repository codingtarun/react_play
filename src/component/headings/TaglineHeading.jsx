import './heading.css';

export default function SecondaryHeading(props){
    return (
        <h5 className='text-center taglineHeading mb-4 text-uppercase'>{props.title}</h5>
    );
}