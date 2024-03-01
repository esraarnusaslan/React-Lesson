import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello World',
        };
    }

    componentDidMount() {
        console.log('first render');
        setInterval(() => {
            this.setState({ message: 'Good Morning' });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.message !== prevState.message) {
            console.log('update');
        }
    }

    render() {
        return (
            <div className="m-5">
                <h2>{this.state.message}</h2>

                <button
                    className="btn btn-danger"
                    onClick={() => this.setState({ message: 'Good Morning' })}
                >
                    Set Hour
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ message: 'Good Afternoon' })}
                >
                    Set Minute
                </button>
                <button
                    className="btn btn-info"
                    onClick={() => this.setState({ message: 'Good Evening' })}
                >
                    Set Message
                </button>
            </div>
        );
    }
}

export default ClassComp;
