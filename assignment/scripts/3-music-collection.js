console.log('***** Music Collection *****')
let collection = []; //create a varible to allow collection be an open array
function addToCollection(titles, artist, yearPublished){ //Set up a function and set the paramenters for the album

//set up a object 'album' with the needed parameters needed within the object.
  let album = {
    titles: titles,
    artist: artist,
    yearPublished: yearPublished
  }
  //
  collection.push(album);
return console.log('now added to the collection',  album.artist);
}

//Addded music using the function added them to the object.
addToCollection('Just friends', 'Musiq Soulchild', 2000)
addToCollection('Im on one' , 'Drake', 2010)
addToCollection('Just What I am', 'Kid Cudi', 2013)
addToCollection('Time & Space', 'Kid Cudi', 2020)
addToCollection('It would be you', 'Trey Songz', 2020)
addToCollection('New Person, Same ole Mistake', 'Tame Impala', 2015)

console.log(collection);

function showCollection(array){
  console.log(array.length);
  for (let i = 0; i<array.length; i++){
    console.log('Album selected:',`${array[i].titles}, by ${array[i].artist}, published in ${array[i].yearPublished}`);
  }
}
showCollection(collection);


function findByArtist(artistName){
  let matchingArtist = []; //create a empty array for matcthing artist.
  for ( let album of collection){
    if( album.artist === artistName){
      album.artist.pop(matchingArtist);
    }
    return console.log('artist is a match', matchingArtist);

  }     //Create a loop to find matching artist in collection.artist

}


findByArtist('Kid Cudi');
