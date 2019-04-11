let playlist = {
  Doors: "People are strange",
  Beatles: "Yesterday",
  Rolling: "Not today"
}

const updatePlaylist = (obj, artist, songTitle) => {
  obj.artist = songTitle;
  return obj;
}
