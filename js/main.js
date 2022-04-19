document.getElementById('search').addEventListener('click', getFetch)

// document.querySelector('h2').innerText = local.getItem('movies')

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
                document.getElementById('results').appendChild(image);

                let title = document.createElement('li');
                title.innerText = movieTitle;
                document.getElementById('results').appendChild(title)

                let release = document.createElement('li');
                release.innerText = yearOfRelease;
                document.getElementById('results').appendChild(release)

                let nominateBtn = document.createElement('button');
                nominateBtn.className = 'top-five'
                let idNominateBtn = 'top-five'
                // nominateBtn.setAttribute('id',idNominateBtn )
                nominateBtn.innerText = 'Nominate'
                document.getElementById('results').appendChild(nominateBtn)

                // document.getElementById('top-five').addEventListener('click', nominate)

                //     function nominate() {
                //         console.log('click')
                //         let newNomination = document.createElement('li');
                //         newNomination.innerText = 'heloo'
                //         document.getElementById('top-nominations').appendChild(newNomination);
                //     }
             }
            document.querySelectorAll('.top-five').addEventListener('click', nominate)

                    function nominate() {
                        console.log('click')
                        let newNomination = document.createElement('li');
                        newNomination.innerText = 'heloo'
                        document.getElementById('top-nominations').appendChild(newNomination);
                    }

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

//ba8c7678