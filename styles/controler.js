class Controller {
    constructor(){
        this.model = new Model();
        this.view = new View({
            onNewMem : this.handleViewMemsChanged
        });
        this.api = new Api();
    }
    init(){
        this.api.fetchMemes().then((response) => {
            if (!response.success) {
                alert("Ошибка получения данных!");
                return;
              }
            const memes = response.data.memes;
            this.model.setMemes(memes);
            this.view.renderMemesList(this.model.getMemName());
            this.view.renderImgMem(this.model.getMemesUrl(this.view.getSelectMem()))
        })
    }
    handleViewMemsChanged = (memName) => {
        const memUrl = this.model.getMemesUrl(memName);
        return memUrl;
    }
    

}