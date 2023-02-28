export class Skills {
    constructor()
    {
        this.GetSkills()
    }

    GetSkills() {

        fetch('/assets/data/Skills.json')
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error));

        function showData(myData) {

            let outPutLanguage = "";
            let outPutOthers = "";
            let myDivLanguages = document.querySelector('#skills_languages')
            let myDivOthers = document.querySelector('#skills_others')

            myData['languages'].forEach(data => outPutLanguage += Template(data.Name, data.Image));
            myData['others'].forEach(data => outPutOthers += Template(data.Name, data.Image));

            myDivLanguages.innerHTML = outPutLanguage;
            myDivOthers.innerHTML = outPutOthers;

        }
    
        function Template (name, image) {
            let html = `<li data-aos="flip-left">
                <div class="logo_wrapper">
                    <img src="/assets/images/skills/${image}" alt="logo">
                </div>
                <span>${name}</span>
            </li>`
        
            return html;
        }

    }

}