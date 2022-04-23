document.getElementById('search').addEventListener('click', getFetch)


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
                                    newNomination.className = 'top-five';

                                let removeBtn = document.createElement('Button')
                                    removeBtn.innerText = 'remove'
                                    // removeBtn.setAttribute("id", 'remove-from-list'); 
                                    removeBtn.className = 'remove-from-list'

                                    if (topFiveLimit.length <= 4) {
                                        document.getElementById('top-nominations').appendChild(newNomination);
                                        buttons[i].setAttribute("disabled", true);
                                        document.getElementById('top-nominations').appendChild(removeBtn);

                                        for (let i = 0; i < remove.length; i++){
        
                                                    remove[i].addEventListener('click', function () {
                                                        console.log(remove)
                                                        console.log(typeof remove)
                                                        let removeBtnArray = Object.values(remove).map((key) => [key]);
                                                        console.log(removeBtnArray);
                                                        removeBtnArray.splice(removeBtnArray[i], 1);
                                                        
                                                   })
                                                } 

                                        // document.getElementById('remove-from-list').addEventListener('click', function () {
                                        //     newNomination.remove();
                                        //     removeBtn.remove();
                                        } else {
                                            alert ('Top 5 limit reached. Please remove movie from nominations list')
                                        }
                                    })

                                // let remove = document.getElementById('remove-from-list');

                                //     for (let i = 0; i < remove.length; i++){
        
                                //         remove[i].addEventListener('click', function () {
                                //                 newNomination.remove();
                                //                 removeBtn.remove();
                                //        })
                                //     } 
                                    

                            }

                            
                        

                        // let remove = document.getElementById('remove-from-list');

                        //     for (let i = 0; i < remove.length; i++){

                        //         remove[i].addEventListener('click', function () {
                        //                 newNomination.remove();
                        //                 removeBtn.remove();
                        //        })
                        //     } 


                                

         })
                    .catch(err => {
            console.log(`error ${err}`)
        })
}





//ba8c7678