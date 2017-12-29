var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
	function showCountriesList(resp) {
  		countriesList.empty();
  		resp.forEach(function(item){

  			var position = $('<li>');
  			var name = $('<p>').addClass('name').text(item.name)
  			var capital = $('<p>').addClass('capital').text('Capital: ' +item.capital);
  			var region = $('<p>').addClass('region').text('Region: ' +item.region);
  			var population = $('<p>').addClass('population').text('Population: ' +item.population);
  			var flag = $('<img>').attr("src", item.flag).addClass('flag');
  			var description = $('<div>').addClass('description').append(name, capital, region, population);

   			position.appendTo(countriesList).append(flag, description);
		});
	}
}