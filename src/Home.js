import React, { Component } from 'react';
import restaurantData from './test';
import './Home.css';
import Login from './Login'
import Register from './Register';
import Welcome from './Welcome';
import Details from './Details';
import Reset from './Reset';


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginPage: true,
            registerPage: false,
            isSignedIn:false,
            restaurants: restaurantData['restaurants'],
            result: [],
            particular: false,
            id: -1,
            username: '',
            password: '',
        }
    }
    pageChanger = (data) => {
        if(data === 'Login')
        {
            this.setState({
                loginPage: false,
                registerPage:false,
                isSignedIn: true,
            })
            return;
        }
        if(data === 'SendToRegister')
        {
            this.setState({
                loginPage: false,
                registerPage:true,
                isSignedIn: false,
            })
            return;
        }
        if(data === 'SendToLogin')
        {
            this.setState({
                loginPage: true,
                registerPage:false,
                isSignedIn: false,
            })
            return;
        }
        if(data === 'sendToHome')
        {
            this.setState({
                particular: false,
            })
            return;
        }
        if(data === 'Reset')
        {
            this.setState({
                loginPage: false,
                registerPage:true,
                isSignedIn: false,
            })
            return;
        }
    }
    search = () => {
        var text = document.getElementById('search').value;
        if(text.length === 0)
        {
        this.setState({
            result: [],
        })
        return;
        }
        var res = this.state.restaurants.filter((data) => data.name.toLowerCase().includes(text.toLowerCase()))
        this.setState({
            result: res,
        })
    }
    setRestraunt = (e) => {
        this.setState({
            particular: true,
            id: e.target.id,
        })
    }

    credentials = (name, pass) => {
        this.setState({
            username: name,
            password: pass,
            loginPage: true,
            registerPage:false,
            isSignedIn:false,
        })
    }
  render() {
    let restaurantsList = <div className='list'>
    {(this.state.result.length === 0) ? this.state.restaurants.map((data, index) => <div key={index} className='listItem'><img src={data.photograph} alt=""/><h3>{data.name}</h3><p>{data.neighborhood}</p><button id={data.id} onClick={this.setRestraunt}>Know More</button></div>) : this.state.result.map((data,index)=> <div key={index} className='listItem'><img src={data.photograph} alt=""/><h3>{data.name}</h3><p>{data.neighborhood}</p><button onClick={this.setRestraunt}>Know More</button></div>)}
</div>
    return (
      <div className='Home'>
        <div className='row'>
            <h1>E X O T I C A</h1>
            <input type='text' id='search' placeholder='Search a restaurant' onKeyUp={this.search}/>
        </div>
        <div className='left'>
            {this.state.isSignedIn ? <Welcome username={this.state.username} func={this.pageChanger}/> : this.state.loginPage ? <Login username={this.state.username} password={this.state.password} func={this.pageChanger} /> : this.state.registerPage ? <Register func={this.pageChanger} func2={this.credentials}/> : <Reset func={this.pageChanger}/>}
        </div>
        {this.state.particular ? <Details array={this.state.restaurants.filter(item => item.id === parseInt(this.state.id))} func={this.pageChanger}/> : restaurantsList}
      </div>
    )
  }
}

export default Home