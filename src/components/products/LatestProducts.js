import React, { Component } from 'react'

export default class LatestProducts extends Component {
    state = {
    LatestItems :[]
  }

  LatestProduct () {
    var data='{products{edges{node{name image{altText uri link mediaDetails{file}}}}}}';
   fetch('http://vantageappspro.com/nci/graphql', {
     method: "POST",
     headers: {
       "Content-Type": "application/graphql"
     },
     body: data,
     dataType: "json"
   })
     .then(response => response.json())
     .then(data => {
       console.log("data: ", data)

       let LatestItems = data.data.products.edges.reverse()
      //  alert("responce"+JSON.stringify(data))
       this.setState({
         LatestItems
       }, () => {
        console.log("res: ", this.state.LatestItems)
       });
     })
     .catch(error => {
       console.log("error: " + JSON.stringify(error));
     });
  }

  componentDidMount() {
    this.LatestProduct ()
  }
  render() {
      const {LatestItems} = this.state
      console.log("latest-items: ", LatestItems)
    return (
        <div className="latest-products py-5">
        <div className="container">
        <div className="col-md-8 mx-auto text-center">
                    <h3>Our Products</h3>
                </div>
      <div className="row pt-5 justify-content-between">
        {LatestItems && LatestItems.length > 0 ? LatestItems.map((item, key) => {
              return(
                <div className="text-center" style={{width: "150px"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{height:"100px"}}>
                    <img src={`http://vantageappspro.com/nci/wp-content/uploads/${item.node.image.mediaDetails.file}`} alt=""/>
                    </div>
                    <h5 className="pt-3 product-name">{item.node.name}</h5>
                </div>
              )
            }): null}
      </div>
      </div>
      </div>
    )
  }
}
