import React, {Component} from 'react';

class Like extends Component {
    constructor(props) {
      super(props);
      this.state = { likes: 0,
    dislikes: 0};
      this.inc = this.inc.bind(this);
      this.dec = this.dec.bind(this);
    }
    inc() {
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
      }
    
      dec() {
        this.setState(prevState => ({ dislikes: prevState.dislikes + 1 }));
      }

    render(){
        return(
            <h5><span className="like" onClick={this.inc}><span className="likes">👍</span> <span >{this.state.likes}</span></span> <span class="dislike" onClick={this.dec}><span className="likes"> 👎</span> <span>{this.state.dislikes}</span></span></h5>
        )
    }
}
export default Like