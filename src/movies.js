// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const spielbergDramas = moviesArray.filter(movie => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const total = moviesArray.reduce((sum, movie) => {
    return sum + (typeof movie.score === 'number' ? movie.score : 0);
  }, 0);
  const average = total / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) {
    return 0;
  }
  const total = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  const average = total / dramaMovies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sorted = [...moviesArray];
  sorted.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
    return a.year - b.year;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const duration = movie.duration;
    let minutes = 0;
    const hoursMatch = duration.match(/(\d+)h/);
    const minsMatch = duration.match(/(\d+)min/);
    if (hoursMatch) {
      minutes += parseInt(hoursMatch[1]) * 60;
    }
    if (minsMatch) {
      minutes += parseInt(minsMatch[1]);
    }
    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const yearScores = {};
  moviesArray.forEach(movie => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = { total: 0, count: 0 };
    }
    yearScores[movie.year].total += movie.score;
    yearScores[movie.year].count += 1;
  });

  let bestYear = null;
  let bestAvg = -1;

  const years = Object.keys(yearScores).sort((a, b) => a - b);
  for (const year of years) {
    const avg = yearScores[year].total / yearScores[year].count;
    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
