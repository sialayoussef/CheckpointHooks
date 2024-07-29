import CardMovie from "./CardMovie"

const ListMovies=({movies,textLive,rate})=>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(textLive.toUpperCase()) && el.rating >= rate)
    return(
        <div className="listMovies">
            {
              x.length == 0 ? <h1>Not Found</h1> :  x.map((el,i,t)=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovies