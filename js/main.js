document.getElementById('search').addEventListener('click', getFetch)
document.getElementById('past-nominations').innerText = localStorage.getItem('movies')


function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `http://www.omdbapi.com/?s=${choice}&apikey=ba8c7678`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
                    
            
                    for (let i = 0; i < data.Search.length; i++) {
                        const poster = data.Search[i].Poster
                        const movieTitle = data.Search[i].Title
                        const yearOfRelease = data.Search[i].Year
                        
                            let image = document.createElement('img');
                            image.src = poster;
                            document.querySelector('.movie-board').appendChild(image);

                            let title = document.createElement('li');
                            title.innerText = movieTitle;
                            document.querySelector('.movie-board').appendChild(title)

                            let release = document.createElement('li');
                            release.innerText = yearOfRelease;
                            document.querySelector('.movie-board').appendChild(release)

                            let nominateBtn = document.createElement('button');
                            nominateBtn.className = 'Nominate'
                            nominateBtn.innerText = 'Nominate'
                            document.querySelector('.movie-board').appendChild(nominateBtn)
                          
                        }

                        let buttons = document.getElementsByClassName('Nominate');
                        let topFiveLimit = document.getElementsByClassName('top-five');
                        let remove = document.getElementsByClassName('remove-from-list');

                        for (let i = 0; i < buttons.length; i++) {
                            const poster = data.Search[i].Poster
                            const movieTitle = data.Search[i].Title
                            const yearOfRelease = data.Search[i].Year

                            buttons[i].addEventListener('click', function () {
                                let newNomination = document.createElement('li');
                                    newNomination.innerText = `${movieTitle} (${yearOfRelease})`;
                                    // newNomination.setAttribute('value', `${movieTitle} (${yearOfRelease})`);
                                    newNomination.setAttribute('id', 'top-five')

                                let removeBtn = document.createElement('Button')
                                    removeBtn.innerText = 'remove'
                                    removeBtn.setAttribute('id', 'on-list')

                                    if (topFiveLimit.length <= 4) {
                                        document.getElementById('top-nominations').appendChild(newNomination);
                                        buttons[i].setAttribute("disabled", true);
                                        document.getElementById('top-nominations').appendChild(removeBtn);
                                        

                                        // *************************************************************
                                        for (let i = 0; i < )
                                        
                                        function save (){

                                            let newData = document.getElementById('top-five').innerText;
                                            console.log( newData )

                                            if(localStorage.getItem('data') == null){
                                                localStorage.setItem('data', '[]');
                                            }

                                            let oldData = JSON.parse(localStorage.getItem('data'));
                                            oldData.push(newData);

                                            localStorage.setItem('data', JSON.stringify(oldData));

                                        }
                                        
                                        function view(){

                                            if(localStrong.getItem('data') !=null){
                                                document.getElementById('past-nominations').innerHTML =JSON.parse(localStorge.getItem('data'))
                                            }
                                        }
                                        
                                        // ****************************************************************
                                        removeBtn.addEventListener('click', function () {
                                            newNomination.remove();
                                            removeBtn.remove();
                                            buttons[i].removeAttribute("disabled", true);
                                        })


                                        } else {
                                            alert ('Top 5 limit reached. Please remove movie from nominations list')
                                        }
                                    })

                                    

                            }

                            
                                

         })
                    .catch(err => {
            console.log(`error ${err}`)
        })
}





//ba8c7678