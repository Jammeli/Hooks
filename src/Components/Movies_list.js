import '../App.css';
import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import Movie_Card from './Movie_Card';


class Movies_list extends Component{
  
  constructor()
  {
    super();
    this.state = {
      search: "",
      title_movie: "",
      descrip_movie : "",
      rating_movie : "",
      url_movie : "",
      movies_add :{id:0,Title:"",Description:"", Rating:"", URL:""},
      movies: [
          {id:1,Title:'Titanic',Description:'mdlmsldmlsmdms', Rating:'7.5', URL:'www.titanic.com'},
          {id:2,Title:'Prison Break',Description:'mdlmsldmlsmdms', Rating:'8', URL:'www.pb.com'},
          {id:3,Title:'Saw III',Description:'mdlmsldmlsmdms', Rating:'6.5', URL:'www.sawwIII.com'},
          {id:4,Title:'The cube',Description:'mdlmsldmlsmdms', Rating:'9', URL:'www.thecube.com'},
          {id:5,Title:'No body',Description:'mdlmsldmlsmdms', Rating:'2', URL:'www.nobody.com'},
          {id:6,Title:'the man',Description:'mdlmsldmlsmdms', Rating:'4', URL:'www.theman.com'},
          {id:7,Title:'Scream',Description:'mdlmsldmlsmdms', Rating:'8.5', URL:'www.scream.com'},
          {id:8,Title:'No escape',Description:'mdlmsldmlsmdms', Rating:'10', URL:'www.noescape.com'}
              ] ,
      movies_filter : [] ,
}
this.run=this.run.bind(this);
}
 clickHandler=(e)=>{ 
   const title_movie = this.title_movie.value;
   const descrip_movie= this.descrip_movie.value;
   const rating_movie=this.rating_movie.value;
   const url_movie = this.url_movie.value;
   //const search = this.search.value;
   this.setState({
     //search:search,
     title_movie:title_movie, 
     descrip_movie :descrip_movie,
     rating_movie:rating_movie, 
     url_movie:url_movie,
     movies_add : {
            Title : title_movie,
            Description : descrip_movie,
            Rating : rating_movie,
            URL : url_movie
                  }
     })
   //this.setState ({})
   }
/*mapping(x){
    const movies1 = x.map(movie=> <Movie_Card 
        key={movie.id}
        title={movie.Title}
        description={movie.Description}
        rating={movie.Rating}
        url={movie.URL}
        />);
        return movies1;
}*/
search=(e)=>
{ 
//e.preventDefault();
this.setState (
  {
    search:e.target.value,
  }
)

console.log("search:",this.state.search)
//console.log(e.target.value)

}
run(e){
    e.preventDefault();
    console.log(this.state.title_movie, this.state.descrip_movie,this.state.rating_movie, this.state.url_movie)
    //console.log(this.state.search)
    this.setState(
      {
      movies:[this.state.movies_add,...this.state.movies],
      })
    }
  render (){
    
    const style={
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
                }
    const style_S={
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        flexDirection: "column"
                }
    return (
<div>
    <div className='container' style={style_S}>
      <input style={{border: "2px solid", borderRadius: "4px",}}
      type="text" 
      placeholder="Filter"
      name = "filter"
      onChange={this.search}
      />
    </div>

    <div className='container' style={style}>
      { 
      this.state.movies.filter ((val)=>{
        if (this.state.search === "") {
          return val;
        }else if (
          val.Title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()) ||
          val.Rating.includes(this.state.search)) {
            return val;
          }
      }).map((m) => (
         <Movie_Card 
          key={m.id}
          title={m.Title}
          description={m.Description}
          rating={m.Rating}
          url={m.URL}
          />)
      ) 
      }
    </div>
    <div className='container'>
    <form>
    <div style={{display:"flex"}}>
        <input type="text" className="form-control" placeholder="Title of the movie" name="titlemovie"  onChange={this.clickHandler} ref ={(put)=>this.title_movie=put}/>
        <input type="text" className="form-control" placeholder="Description oh the movie" name="descrimovie" onChange={this.clickHandler} ref ={(put)=>this.descrip_movie=put}/>
        <select className="form-select" aria-label="Default select example" name="ratemovie" onChange={this.clickHandler} ref ={(put)=>this.rating_movie=put}>
                    <option value="0">0</option>
                    <option value="0.5">0.5</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5</option>
                    <option value="4">4</option>
                    <option value="4.5">4.5</option>
                    <option value="5">5</option>
                    <option value="5.5">5.5</option>
                    <option value="6">6</option>
                    <option value="6.5">6.5</option>
                    <option value="7">7</option>
                    <option value="7.5">7.5</option>
                    <option value="8">8</option>
                    <option value="8.5">8.5</option>
                    <option value="9">9</option>
                    <option value="9.5">9.5</option>
                    <option value="10">10</option>
        </select>
        <input type="url" className="form-control" placeholder="URL of the movie" name="urlmovie" onChange={this.clickHandler} ref ={(put)=>this.url_movie=put}/>
        <button onClick={this.run} className="btn btn-primary">Add</button>
  </div>
</form>
</div>
</div>
    
  );
}}

export default Movies_list;
