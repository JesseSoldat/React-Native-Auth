import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size={'small'} />;
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;