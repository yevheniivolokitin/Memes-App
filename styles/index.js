fetch(`https://api.imgflip.com/get_memes`)
    .then((data) => data.json())
    .then(data => {
        memes = data.data.memes;
        console.log(memes);
    })
