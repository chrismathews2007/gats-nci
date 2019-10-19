import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class Navigation extends Component {

  state = {
    NavItems :[]
  }

  Navigation () {
    var data='{menus{edges{node{menuItems{edges{node{label}}}}}}}';
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

       let NavItems = data.data.menus.edges[0].node.menuItems.edges
      //  alert("responce"+JSON.stringify(data))
       this.setState({
         NavItems
       }, () => {
        console.log("res: ", this.state.NavItems)
       });
     })
     .catch(error => {
       console.log("error: " + JSON.stringify(error));
     });
  }

  componentDidMount() {
    this.Navigation ()
  }

  render() {
    const {NavItems} = this.state

    return (
      <nav className="nav-items py-2 navbar navbar-expand-lg">
      <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {NavItems && NavItems.length > 0 ? NavItems.map((item, key) => {
              return(
                <>
                <li className="nav-item"><Link  className="nav-link" to="">{item.node.label}</Link>
                </li>
                {console.log("Child: ", item.node.childItems)}
                </>
              )
            }): null}
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
