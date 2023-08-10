import React from "react";
import { Carousel, Card } from "react-bootstrap";
import carouselImage1 from "../../assets/images/carousel-img-1.jpg";
import carouselImage2 from "../../assets/images/carousel-img-2.jpg";
import carouselImage3 from "../../assets/images/carousel-img-3.jpg";

function HomeBanner() {
	return (
		<Carousel>
			<Carousel.Item>
				<Card className="bg-light text-black">
					<Card.Img src={carouselImage1} alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title>Lorem ipsum</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur!</Card.Text>
						<Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</Carousel.Item>
			<Carousel.Item>
				<Card className="bg-dark text-white">
					<Card.Img src={carouselImage2} alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title>Lorem ipsum</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur!</Card.Text>
						<Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</Carousel.Item>
			<Carousel.Item>
				<Card className="bg-dark text-dark">
					<Card.Img src={carouselImage3} alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title>Lorem ipsum</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur!</Card.Text>
						<Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeBanner;
