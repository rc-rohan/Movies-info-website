export const truncateString = (str,n) =>{
  return str.length > n ? str.substr(0,n-1)+"..." : str
}

export const getFavourites = (favourites,id)=>{
  return favourites.find(el=>el.id===id);
}