import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

const placeHolderImage = 'https://placehold.co/2000x600';

export default function Slider(){
    return (
        <Carousel>
            <Carousel.Item>
                <CarouselImage placeHolderImage = {placeHolderImage}/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage placeHolderImage = {placeHolderImage}/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage placeHolderImage = {placeHolderImage} />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}