interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song= 'Nueva Song';

const{
    song:anotherSong, 
    songDuration:duration,
    details
}= audioPlayer;
const{author}= details

// console.log('Songs: ',song);
// console.log('Songs: ',anotherSong);
// console.log('SongDuration: ',duration);
// console.log('Author: ',audioPlayer.details.author);
// console.log('Author: ',author);

//const{author}= audioPlayer.details;
//console.log('Author: ', author);

const [,,trunk='Not Found']: string[]=['Goku','Vegeta'];

console.error('Personaje 3:', trunk);

export {}