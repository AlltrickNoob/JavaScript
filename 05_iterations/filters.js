// let myArr = ["Wasim", "Iron", "Nike/Puma", "Abdullah", "Aasim", "Abdurrahman", "Abdussamad"]

// let newArr = myArr.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(newArr); // for each loop doesn't return any value

let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr2 = myArr2.filter(function(item){
    // console.log(item);
    return item > 4
})

console.log(newArr2);

let newArr3 = []

myArr2.forEach((item) => {
    // console.log(item);
    if (item > 4) {
        newArr3.push(item)
    }
})
console.log(newArr3);

let Movies = [
  {
    "name": "The Conjuring: Last Rites",
    "type_of_movie": "Horror",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "The ninth installment in The Conjuring Universe, this film is based on the true-life Smurl haunting. It stars Patrick Wilson and Vera Farmiga, reprising their roles as paranormal investigators Ed and Lorraine Warren.",
    "worldwide_gross": "$210.1 million"
  },
  {
    "name": "Baaghi 4",
    "type_of_movie": "Action, Thriller",
    "trending_month": "September 2025",
    "country": "India",
    "description": "An Indian Hindi-language action thriller and the fourth installment in the Baaghi film series. It follows a man whose reality blurs after surviving a suicide attempt, drawing him into a web of obsession and love.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Jolly LLB 3",
    "type_of_movie": "Comedy, Drama",
    "trending_month": "September 2025",
    "country": "India",
    "description": "This is the third installment in the popular Indian legal black comedy series. The film stars Akshay Kumar and Arshad Warsi, among others, reprising their roles.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "OG",
    "type_of_movie": "Action, Crime",
    "trending_month": "September 2025",
    "country": "India",
    "description": "An Indian Telugu-language action crime film about a mob boss who resurfaces after a decade to seek vengeance against rival crime lords.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Highest 2 Lowest",
    "type_of_movie": "Crime, Thriller",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "An American crime thriller directed by Spike Lee, this film is an English-language remake of the 1963 Japanese film 'High and Low'. It stars Denzel Washington.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Superman",
    "type_of_movie": "Action, Sci-fi",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "A reboot of the Superman film series, starring David Corenswet as the titular character. Superman faces an international conflict orchestrated by Lex Luthor.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Thunderbolts*",
    "type_of_movie": "Action, Sci-fi",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "A Marvel Studios film featuring an ensemble cast of antiheroes forced to work together on a dangerous mission.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "KPop Demon Hunters",
    "type_of_movie": "Musical, Action",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "A Netflix animated film about a K-pop girl group who moonlight as demon hunters to protect their fans.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "F1",
    "type_of_movie": "Sport, Action",
    "trending_month": "September 2025",
    "country": "United States",
    "description": "A sports drama starring Brad Pitt as a former Formula One driver who returns to the sport to save a struggling team.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Inside Out 2",
    "type_of_movie": "Animation, Family",
    "trending_month": "June 2024 (Popularity still high)",
    "country": "United States",
    "description": "The sequel to the 2015 Pixar film, this movie follows Riley's emotions as she navigates her teenage years and puberty.",
    "worldwide_gross": "Over $1.6 billion (as of September 2025)"
  },
  {
    "name": "Mission: Impossible – The Final Reckoning",
    "type_of_movie": "Action, Spy",
    "trending_month": "2025",
    "country": "United States",
    "description": "The final installment of the Mission: Impossible series, with Tom Cruise as Ethan Hunt facing his greatest challenge yet.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Jurassic World Rebirth",
    "type_of_movie": "Sci-fi, Adventure",
    "trending_month": "2025",
    "country": "United States",
    "description": "The next installment in the Jurassic World franchise, continuing the story of humans and dinosaurs co-existing in the modern world.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "The Old Guard 2",
    "type_of_movie": "Action, Fantasy",
    "trending_month": "2025 (Netflix release)",
    "country": "United States",
    "description": "The sequel to the Netflix hit, following a group of immortal mercenaries who protect humanity.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Karate Kid: Legends",
    "type_of_movie": "Action, Drama",
    "trending_month": "2025",
    "country": "United States",
    "description": "A new chapter in the Karate Kid saga, potentially exploring new characters and continuing the legacy of Mr. Miyagi.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Final Destination: Bloodlines",
    "type_of_movie": "Horror",
    "trending_month": "2025",
    "country": "United States",
    "description": "The latest film in the franchise where a group of people try to cheat death's design.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Maa",
    "type_of_movie": "Drama",
    "trending_month": "September 2025",
    "country": "India",
    "description": "A trending Indian film on Netflix, focusing on a strong maternal character and emotional family dynamics.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Inspector Zende",
    "type_of_movie": "Crime, Thriller",
    "trending_month": "September 2025",
    "country": "India",
    "description": "A police procedural crime thriller that is trending highly on Netflix India.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Tehran",
    "type_of_movie": "Thriller",
    "trending_month": "September 2025",
    "country": "India (Trending on Netflix India)",
    "description": "A tense thriller film that has found high viewership in the Indian market.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "The Thursday Murder Club",
    "type_of_movie": "Mystery, Comedy",
    "trending_month": "September 2025",
    "country": "United Kingdom",
    "description": "A British mystery-comedy film based on the popular book series, about a group of elderly friends who investigate murders.",
    "worldwide_gross": "Unknown"
  },
  {
    "name": "Kung Fu Panda 4",
    "type_of_movie": "Animation, Action",
    "trending_month": "March 2024 (Continued popularity)",
    "country": "United States",
    "description": "Po leaves the Valley of Peace to become the Spiritual Leader, and must train a new Dragon Warrior while facing a new sorceress.",
    "worldwide_gross": "Over $540 million"
  }
]

let filterzz = Movies.filter((film)=>{return film.worldwide_gross === "Unknown"})
// console.log(filterzz);

filterzz = Movies.filter((film)=>film.country === "India")
// console.log(filterzz);

filterzz = Movies.filter((film) => (film.trending_month === "September 2025"))
console.log(filterzz);
