import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description,imageUrl , newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/04/07/1600x900/SOLAR-ECLIPSE-USA-9_1712396776756_1712464525384.JPG":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
