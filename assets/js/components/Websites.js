export class Websites {
    constructor()
    {
        this.GetWebsites()
    }

    GetWebsites() {

        fetch('/assets/data/Websites.json')
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error));

        function showData(myData) {

            let outPut = "";
            let myDiv = document.querySelector('#realisation')

            myData['Wordpress'].forEach(data => outPut += Template(data.Name, data.Link, data.Image, data.Description));

            myDiv.innerHTML = outPut;

        }
    
        function Template (name, link, image, description) {
            let html = `<a href="${link}" target="_blank" class="swiper-slide">
                    <img src="/assets/images/projets${image}" alt="image website">
                    <div class="info">
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                </a>`
        
            return html;
        }

    }

}


                