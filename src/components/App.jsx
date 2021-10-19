import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            buttonOneText: 'Login',
            buttonTwoText: 'Sign up',
            user: null,
            avatar: null
        }
        this.initialState = this.state;
    }

    handleSignupDelete = async () => {
        if (!this.state.isLoggedIn) {
            this.handleLoginLogout();
        } else {
            this.setState(this.initialState);
        }
    }

    handleLoginLogout = async () => {
        if (!this.state.isLoggedIn) {
            const { value: name } = await Swal.fire({
                title: 'Input username',
                html:
                `<form>
                    <div class="form-group">
                        <label for="username-input">Username</label>
                        <input type="text" class="form-control" id="username-input" aria-describedby="username" placeholder="Enter your username here" />
                    </div>
                    <div class="form-group">
                        <label for="password-input">Password</label>
                        <input type="password" class="form-control" id="password-input" aria-describedby="password-reqs" placeholder="Enter your password here" />
                        <small id="password-reqs" class="form-text text-muted">
                            Your password is not saved, submitted, has no length requirements, or character requirements. Hooray for empty client-side validation!
                        </small>
                    </div>
                </form>`,
                focusConfirm: false,
                preConfirm: () => {
                  return document.getElementById('username-input').value.replace(/[^a-zA-Z0-9]/g, "").substring(0,15);
                }
            });
            if (name) {
                this.setState({
                    user: name,
                    avatar: 'https://picsum.photos/128',
                    isLoggedIn: true,
                    buttonOneText: 'Logout',
                    buttonTwoText: name ? `Delete @${name}` : 'Haxx, you logged in without a real account because this is using client-side validation!'
                });
            }
        } else {
            this.setState(this.initialState);
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin">
                    <Col md={2}><Button onClick={this.handleLoginLogout} className="badge-pill vr-thin" variant="outline-info">{this.state.buttonOneText}</Button></Col>
                    <Col md={2}><Button onClick={this.handleSignupDelete} className="badge-pill vr-thin" variant="info">{this.state.buttonTwoText}</Button></Col>
                </Row>
                <Row>
                    <Col md={2} className="justify-content-md-left">
                        <LeftSidebar App={this.state} />
                    </Col>
                    <Col md={7} className="justify-content-md-center text-center vr-thin">
                        <ChirpPanel App={this.state} />
                    </Col>
                    <Col md={3}>
                        <TrendsPane />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default App;