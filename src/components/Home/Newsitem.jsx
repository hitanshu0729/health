import React, { Component } from 'react';
// import Sthethoscope from "/"
class Newsitem extends Component {
  render() {
    // const defaultImageUrl = 'health/src/components/Home/sthethoscope.jpeg';
    let { title, description, urlToImage='https://th.bing.com/th/id/OIG.eWKMkCIBmL3G5657_OUN?pid=ImgGn', newsUrl } = this.props;

    return (
<div className='my-3'>
  <div className="card" style={{ display: 'flex' }}>
    <div className="card-body custom-card-body">
      <img
        src={urlToImage}
        className="card-img-top"
        alt="No image available"
        style={{ height: '250px', width: '100%', objectFit: 'cover' }}
      />
      <h5 className="card-title font-weight-bold">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={newsUrl} target="blank" className="btn btn-primary btn-sm">Read more</a>
    </div>
  </div>
</div>

    )
  }
}

export default Newsitem;
