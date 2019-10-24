import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class SubMenu extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='Cabo'
              active={activeItem === 'Cabo'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Microfone'
              active={activeItem === 'Microfone'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Percução'
              active={activeItem === 'Percução'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Instrumento'
              active={activeItem === 'Instrumento'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
