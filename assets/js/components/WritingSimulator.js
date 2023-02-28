export class WritingSimulator {
    constructor()
    {
        this.Writing()
    }

    Writing()
    {
        const slidetext = document.getElementById('slidetext');
        const phrases = ['Développeur Web', 'curieux', 'passionné'];
        
        let iPhrase = 0
        let index = 0
        let currentPhrase = []
        let isDeleting = false
        let isEnd = false
        
        function loop() {
        
            isEnd = false
            slidetext.innerHTML = 'Je suis ' + currentPhrase.join('')
        
            if (index == phrases[iPhrase].length) {
                isDeleting = true
                isEnd = true
            }
        
            if (!isDeleting) {
                currentPhrase.push(phrases[iPhrase][index])
                index++
            }
        
            if (isDeleting) {
                currentPhrase.pop(phrases[iPhrase][index])
                index--
        
                if (index == 0) {
                    isDeleting = false
                    currentPhrase = []
                    iPhrase++
        
                    if (iPhrase == phrases.length) iPhrase = 0
        
                }
            }
        
            const speedUp = Math.random() * (100 - 80) + 80
            const normalSpeed = Math.random() * (200 - 150) + 150
            let time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed
        
            setTimeout(loop, time)
        }
        
        loop()
    }
}