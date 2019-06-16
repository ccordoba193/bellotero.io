import React, { Component } from 'react';
import axios from 'axios';
import './Testimonial.css';

class Testimonial extends Component {

    constructor (props) {
        super(props);
        this.state = {
            testimonials: [],
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/page1.json')
            .then(res => {
                this.setState({ testimonials: res.data })
            })
    }

    render() {
        const { testimonials } = this.state;
        return(
            <section>
                <div className="marquee">
                    <p className="text-customer"> {testimonials.slider!==undefined?testimonials.slider.title:'Error'} </p>
                </div>
                <div className="centered-info">
                    <div>
                        {testimonials.slider!==undefined?testimonials.slider.reviews.map( (review, index) => (
                        <div>
                            <div className="text-name">{review.name}</div>
                            <div className="text-position">{review.position}</div>
                            <div className="inside">{review.comment}</div>
                        </div>
                        )):'Error'}
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;

