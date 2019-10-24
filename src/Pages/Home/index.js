import React, {Component} from 'react';

import './styles.css';
import { Grid, Menu, Segment, Table, Input } from 'semantic-ui-react'

import Tabela from '../../Component/Tabela'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Tabela:[
        {Id: 1, Nome: 'Violão', Modelo: 'Gianini 123', Quantidade: 2, Fucionando: 1, Defeito: 1, Foto: 'img', Estoque: 3, Localização: 'Comunidade'},
      ]
    };
  }
  state = { activeItem: 'Cabo' }
  state = { activeItem: 'Microfone' }
  state = { activeItem: 'Bateria' }
  state = { activeItem: 'Instrumento' }
  state = {activeItem: 'Caixa de som'}
  state = {activeItem: 'Amplificador'}
  state = {activeItem: 'Mesa de som'}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  state = { activeItem: 'inbox' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })  
  
  render(){
    const { activeItem } = this.state
   
    
    return(
      <div>
        <div class="SubMenu">
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
              name='Bateria'
              active={activeItem === 'Bateria'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Instrumento'
              active={activeItem === 'Instrumento'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Caixa de som'
              active={activeItem === 'Caixa de som'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Amplificador'
              active={activeItem === 'Amplificador'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Mesa de som'
              active={activeItem === 'Mesa de som'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <div class="Tabela">
              <Table singleLine>
                <Table.Header>
                  <Table.Row>
                    {this.state.Tabela.map((item) => {
                      return(
                        <div>
                          <Table.HeaderCell>Nome</Table.HeaderCell>
                          <Table.HeaderCell>Modelo</Table.HeaderCell>
                          <Table.HeaderCell>Quantidade</Table.HeaderCell>
                          <Table.HeaderCell>Fucionando</Table.HeaderCell>
                          <Table.HeaderCell>Defeito</Table.HeaderCell>
                          <Table.HeaderCell>Foto</Table.HeaderCell>
                          <Table.HeaderCell>Estoque</Table.HeaderCell>
                          <Table.HeaderCell>Localização</Table.HeaderCell>
                          <tbody class="">
                              <Tabela key = {item.id} />
                              <tr class="">
                                <td class=""><Tabela Nome = {item.Nome} /></td>
                                <td class=""><Tabela Modelo = {item.Modelo} /></td>
                                <td class=""><Tabela Quantidade = {item.Quantidade} /></td>
                                <td class=""><Tabela Funcionando = {item.Funcionando} /></td>
                                <td class=""><Tabela Defeito = {item.Defeito} /></td>
                                <td class=""><Tabela Foto = {item.Foto} /></td>
                                <td class=""><Tabela Estoque = {item.Estoque} /></td>
                                <td class=""><Tabela Localização = {item.Localização} /></td>
                              </tr>
                          </tbody>                       
                        </div>
                      ); 
                    })}
                  </Table.Row>
                </Table.Header>
              </Table>
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
      <div class="Barra">
        <Menu vertical>
          <Menu.Item
            name='Adicionar'
            active={activeItem === 'Adicionar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Excluir'
            active={activeItem === 'Excluir'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Input icon='search' placeholder='Buscar' />
          </Menu.Item>
        </Menu>
      </div>  
    </div>
    );
  }
}


export default App;