const btnSubmit = $('#btnSubmit')
btnSubmit.on('click', function()){

    let date = $('getSelectorDate').val()

    $.ajax({

        url: 'https://api.nasa.gov/planetary/apod?api_key=QtXhoBYIHpmOlsdCllD57R9yXLZLgIMMgjZRqZVE'
        success: function(req){

        $('h1').html(`${req.title}`)
        $('#text').html(`${req.explanation}`)

        if (req.media_type === "image"){
            $('body').css('background-image', `url(${req.url})`)
        } else {
            $('body').html(`<iframe src = "${req.url}" allowfullscreen>`)
        }
        },
    })
})
