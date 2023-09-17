class Model {
    constructor(){
        this.memes = [];
        this.memName = [];
    }
    setMemes(memes){
        this.memes = memes;
    }
    getMemes(){
        return this.memes;
    }
    getMemName(){
        this.memes.forEach(mem => {
            this.memName.push(mem.name);
        });
        return this.memName;
    }
    getMemesUrl(memName){
        let memUrl;
        this.memes.forEach(mem => {
            if (mem.name === memName) {
                memUrl = mem.url;
            };
        });
        return memUrl;
    }
}