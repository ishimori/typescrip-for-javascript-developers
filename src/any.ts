import axios from 'axios';
export {}; 

let url : string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    interface Article{
        id : Number;
        title:String;
        description:String;
    }
    let data : Article[]
    // let data : any;
    data = response.data;

	let test : string = 'aa';

/*
    data =[
        {
            id :1,
//            title : "title",
            description : "desc"
        }
    ];
*/    
    console.log(data);
  })