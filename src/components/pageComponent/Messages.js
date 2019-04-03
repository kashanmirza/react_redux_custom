import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import Alertmesgcomponent from '../helper/customComponent/Alertmesgcomponent';
import axios from 'axios';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      response: ''
    }
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
    //   // Handle service success response
    //   console.log(response.data)
    //   const persons = response.data;
    //   this.setState({ persons });
    // })
  }

  render() {
    return (
      <div>
        {/* {this.state.persons.map((person, index) => (
          <div key={index.toString()}>
            <p>{person.userId}</p>
            <p>{person.id}</p>
            <p>{person.title}</p>
            <p>{person.body}</p>
          </div>
        ))} */}
        <div className="col-md-12">
          <div className="row">
            <div className="overviewBox clearfix">
              <h2>Messages</h2>
              <div className="marginTop">

                <Alertmesgcomponent
                  messageClassName="alert alert-success"
                  messageTitle="Success!"
                  messageDescription="This alert box could indicate a successful or positive action."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-info"
                  messageTitle="Info!"
                  messageDescription="This alert box could indicate a neutral informative change or action."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-warning"
                  messageTitle="Warning!"
                  messageDescription="This alert box could indicate a warning that might need attention."
                />

                <Alertmesgcomponent
                  messageClassName="alert alert-danger"
                  messageTitle="Danger!"
                  messageDescription="This alert box could indicate a dangerous or potentially negative action."
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;




