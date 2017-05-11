const data = require('./data/comedy.json'),
      moment = require('moment');
      moment().format();

//  moment().format("DD/MM/YYYY");    
module.exports= class comedy_vod
{
Get_all_movies(){

var movies=[];


for(let i in data){

    movies[i]=data[i].movie;
}

return movies; 
}

Get_movies_by_id(id){

var info;
console.log(id);
for(let i in data)
    if(data[i].id==id) info=data[i];
                 
if(!info) info="no movies were found by id";                 
 return info;   

}

Get_movies_by_years(start,end){
var info;
info=[];
let index=0;
for(let i in data){
 if((data[i].release_year-start>=0)&&(end-data[i].release_year>=0)){
    info[index]=data[i];
    index++;
         }
       }  
if(!info[0]) info="no movies were found between those years";       
 return info;
}

}