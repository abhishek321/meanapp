import React from 'react'

const Product = (props) => {
    const { _id, title, description, price, discountPercentage, rating, brand, category, thumbnail } = props;
    return (

        <div className="card">
            <div type="button" className="position-relative">
                <img src={thumbnail} style={{ "width": 414, "height": 219 }} className="card-img-top" alt={brand} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    Delete
                    <span className="visually-hidden">unread messages</span>
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{ width: 382, height: 72 }}>{description.length < 130 ? description : (description.slice(0, 130) + '...')}</p>
            </div>
            <div style={{ "backgroundColor": " #b7bfbf" }} className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary btn-sm">{brand}</button>
                <button type="button" className="btn btn-secondary btn-sm">{category}</button>
                <button type="button" className="btn btn-info btn-sm">{rating} | {discountPercentage}% | ${price}</button>
            </div>
            <div className="card-footer d-none">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    )
}

export default Product
