import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousal = () => {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                <img src="https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg" width="100%" />
                    <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://tse1.mm.bing.net/th?id=OIP.VYJtv8o26pl7QqP_3x6megHaDk&pid=Api&P=0&h=180" width="100%" />
                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg" width="100%" />
                    <Carousel.Caption>
                        <h1>Third slide label</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousal
