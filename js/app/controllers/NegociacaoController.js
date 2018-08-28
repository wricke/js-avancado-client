class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($("#ListaNegociacoes"));
    this._negociacoesView.update(this._listaNegociacoes);
  }
  
  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();
    this._listaNegociacoes.adiciona(negociacao);
    console.log(this._listaNegociacoes)

    this._negociacoesView.update(this._listaNegociacoes);

    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;

    this._inputData.focus();

  }

  _criaNegociacao(){
    return new Negociacao(new Date(DateHelper.textoParaData(this._inputData.value)), this._inputQuantidade.value,this._inputValor.value);
  }

}