export class UpdateYear {
    constructor()
    {
        this.ChangeYear()
    }

    ChangeYear()
    {
        const foot = document.getElementById('foot');
        let now = new Date();
        let year = now.getFullYear();
        foot.textContent = "Copyright © " + year + " Développé Par Damien THERY";
    }
}