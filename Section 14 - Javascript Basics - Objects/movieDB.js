movieDB = {
	movies: [
		{
			title: 'Godzilla',
			rating: 4.5,
			hasWatched: true,
		},
		{
			title: 'Godzilla: King of the Monsters',
			rating: 5,
			hasWatched: true,
		},
		{
			title: 'Edge of Tomorrow',
			rating: 5,
			hasWatched: true,
		},
		{
			title: 'Transformers: War for Cybertron',
			rating: 3.5,
			hasWatched: false,
		},
	],
};

movieDB.movies.forEach(movie => {
	let output = 'You have ';
	if (!movie.hasWatched) {
		output += 'not ';
	}
	output += 'seen "' + movie.title + '" - ' + movie.rating + ' stars';
	console.log(output);
});
