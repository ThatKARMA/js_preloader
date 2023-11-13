document.body.onload = function() {

    setTimeout(function() {
        let preloader = document.getElementById('page-preloader');
        let loadpagehtml = document.querySelector('html');
        let loadpagebody = document.querySelector('body');
        if ( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done');
            loadpagehtml.classList.add('doneload');
            loadpagebody.classList.add('doneload');
        }
    }, 2000);

}