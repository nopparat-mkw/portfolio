import React, { Component } from 'react';
import { LinkNavigator, LinkText, TextSpan } from './LinkNavigator.style'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class LinkTabNavigator extends Component {

	render() {
		return (
			<LinkNavigator>
				{
					this.props.navigators.length > 0 && this.props.navigators.map((nav) => {
						return (
							<LinkText key={`${nav.tabIndex}--${nav.title}`} active={this.props.store.currentActiveIndex === nav.tabIndex} onClick={() => this.props.store.changeTab(nav.tabIndex)}>
								<TextSpan>{nav.title}</TextSpan>
							</LinkText>
						)
					})
				}
			</LinkNavigator>
		);
	}
}

LinkTabNavigator.defaultProps = {
	navigators: []
}

export default LinkTabNavigator;
