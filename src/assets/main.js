$(function() {

  // Request report card object from codeschool api jsonp
  $.ajax({
    url: 'https://www.codeschool.com/users/1949742.json',
    dataType: 'jsonp',
    success: function(response) {
      var badges = $('#badges');
      response.courses.completed.forEach(function(course){
        badges.append('<div class="course"><h3>'+ course.title +'</h3>'+
        '<img src="'+course.badge+'" />'+
        '<a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a>'+'</div>');
      });
    }
  });

});
