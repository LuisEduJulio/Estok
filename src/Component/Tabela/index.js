import React, {Component} from 'react'

class Tabela extends Component{
  render(){
    return(
      <div key={this.props.Id}>
        <span>{this.props.Nome}</span>
        <span>{this.props.Modelo}</span>
        <span>{this.props.Quantidade}</span>
        <span>{this.props.Funcionando}</span>
        <span>{this.props.Defeito}</span>
        <span>{this.props.Foto}</span>
        <span>{this.props.Estoque}</span>
        <span>{this.props.Localização}</span>
      </div>
    );
  }
}
export default Tabela;
