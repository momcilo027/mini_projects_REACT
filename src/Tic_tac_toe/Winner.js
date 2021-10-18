export const Winner_arr = (field) =>{
  const win_arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < win_arr.length; i++){
    const [a, b, c] = win_arr[i];
    if(field[a] && field[a] === field[b] && field[a] === field[c]){
      return field[a];
    }
  }
  return null;
}
