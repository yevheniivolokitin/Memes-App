class View {
    constructor({ onNewMem }){
        this.listNode = document.querySelector("#select-photo")
        this.memesImg = document.querySelector("#memesImg")
         this.aboveTextNode = document.querySelector("#above-text");
         this.belowTextNode = document.querySelector("#below-text");
         this.inputAboveTextNode = document.querySelector("#inputAboveText");
         this.inputBelowTextNode = document.querySelector("#inputBeloweText");
         
         this.onNewMem = onNewMem;
         
         this.listNode.addEventListener("change", this._handleSelectMem);
         this.inputAboveTextNode.addEventListener("input", this._handleTopText);
         this.inputBelowTextNode.addEventListener("input", this._handleBottomText);
    }
    renderMemesList(memes){
        this.memHTML = '';
        memes.forEach((memName) => {
            this.memHTML += `
            <option value="${memName}">${memName}</option>
            `
        });
        this.listNode.innerHTML = this.memHTML;
    }
    getSelectMem(){
        return this.listNode.value;
    }
    _handleTopText = () =>{
        const text = this.inputAboveTextNode.value;
        this._renderTopText(text);
    };
    _handleBottomText = () =>{
        const text = this.inputBelowTextNode.value;
        this._renderBottomText(text);
    };
    _renderTopText = (text) =>{
        this.aboveTextNode.innerText = text;
    };
    _renderBottomText = (text) =>{
        this.belowTextNode.innerText = text;
    };
    renderImgMem(url){
        this.memesImg.setAttribute("src", url)
    }
    _handleSelectMem = () => {
        const memUrl = this.onNewMem(this.getSelectMem());
        this.renderImgMem(memUrl);
    }
}