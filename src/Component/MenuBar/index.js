import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'


export default class MenuBar extends Component {
  state = { activeItem: 'Home' }
  state = { activeItem: 'Configurações' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            href="/"
          />
          <Menu.Item
            name='Configurações'
            active={activeItem === 'Configurações'}
            onClick={this.handleItemClick}
            href="/Configuracoes"
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

       
      </div>
    )
  }
}
