import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	myList: [
			{			 
				'title': 'Futurama', 
				'id': 1,
				'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
			}, 
			{
				'title': 'The Interview',
				'id': 2,
				'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
			},
			{
				'title': 'Gilmore Girls',
				'id': 3,
				'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'	 
			} 
		],
		recommendationsList:[
			{
				'title': 'Family Guy',
				'id': 4,
				'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
			},
			{
				'title': 'The Croods',
				'id': 5,
				'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'	
			},
			 
			{
				'title': 'Friends',
				'id': 6,
				'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
			}
		]
	  };
	  this.addToList = this.addToList.bind(this);
	  this.removeFromList = this.removeFromList.bind(this);
	}

	addToList(record){
		var list = this.state.myList;
		var recList = this.state.recommendationsList;
		list.push(record);
		recList.splice(recList.indexOf(record),1);
		this.setState({
			myList:list,
			recommendationsList:recList
		});
	}

	removeFromList(record){
		var list = this.state.myList;
		var recList = this.state.recommendationsList;
		recList.push(record);
		list.splice(list.indexOf(record),1);
		this.setState({
			myList:list,
			recommendationsList:recList
		});
	}

	render(){
		var self = this;
		return(
			<div className="container">
				<div className="row">
					<Header/>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<hr/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4>My List:</h4>
					</div>
				</div>
				<div className="row">
					{this.state.myList.map(function(record, index){ return (<MyListRow key={index} data={record} remove={self.removeFromList}></MyListRow>) })}
				</div>
				<div className="row">
					<div className="col-lg-12">
						<hr/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4>Recommendations:</h4>
					</div>
				</div>
				<div className="row">
					{this.state.recommendationsList.map(function(record, index){ return (<RecommendationsRow key={index} data={record} add={self.addToList}></RecommendationsRow>) })}
				</div>
			</div>
		);
	}
}

class Header extends Component {
	render(){
		return(
			<div className="col-lg-12">
				<h1>NetFlix</h1>
			</div>
		);
	}
}

class MyListRow extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.onHover = this.onHover.bind(this);
	  this.onHoverOut = this.onHoverOut.bind(this);
	}

	onHover(){
	  ReactDOM.findDOMNode(this.refs.removeButton).style.visibility = 'visible';
	}

	onHoverOut(){
	  ReactDOM.findDOMNode(this.refs.removeButton).style.visibility = 'hidden';
	}

	componentDidMount(){
	  ReactDOM.findDOMNode(this.refs.removeButton).style.visibility = 'hidden';
	}

	render(){
		return(
			<div className="col-lg-3" onMouseEnter={this.onHover} onMouseLeave={this.onHoverOut}>
				<div className="row">
					<img src={this.props.data.img} alt={this.props.data.name} className="img-rounded img-resopnsive" />
				</div>
				<div className="row">
					<div className="col-lg-12">
						<p>
							{this.props.data.title}
						</p>	
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<button ref="removeButton" type="button" className="btn btn-danger" onClick={()=> this.props.remove(this.props.data)}><span className="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove from List</button>						
					</div>
				</div>
			</div>
		);
	}
}

class RecommendationsRow extends Component {
	constructor(props) {
	  super(props);	
	  this.onHover = this.onHover.bind(this);
	  this.onHoverOut = this.onHoverOut.bind(this);
	}

	onHover(){
	  ReactDOM.findDOMNode(this.refs.addButton).style.visibility = 'visible';
	}

	onHoverOut(){
	  ReactDOM.findDOMNode(this.refs.addButton).style.visibility = 'hidden';
	}

	componentDidMount(){
	  ReactDOM.findDOMNode(this.refs.addButton).style.visibility = 'hidden';
	}

	render(){
		return(
			<div className="col-lg-3" onMouseEnter={this.onHover} onMouseLeave={this.onHoverOut}>
				<div className="row">
					<img src={this.props.data.img} alt={this.props.data.name} className="img-rounded img-responsive" />
				</div>
				<div className="row">
					<div className="col-lg-12">
						<p>
							{this.props.data.title}
						</p>	
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<button ref="addButton" type="button" className="btn btn-info" onClick={()=>this.props.add(this.props.data)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add to List</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;