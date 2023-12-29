$(document).ready(function() {
  $.ajax({
    url: "https://api.github.com/users/kajov",
    data: {
      client_id: '',
      client_secret: ''
    }
  }).done(function(user) {
    $.ajax({
      url: "https://api.github.com/users/kajov/repos",
      data: {
        client_id: '',
        client_secret: '',
        sort: 'created: asc'
      }
    }).done(function(repos) {
      $.each(repos, function(index, repo) {
        $('.repos').append(`
          <p>
              <a target="_blank" href="${repo.html_url}">${repo.name}</a>
          </p>
        `)
      })
    })
  })
})
