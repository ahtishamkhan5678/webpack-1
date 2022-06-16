let find= async(api,type)=>{
    
    try{
        //let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${type}& client_id=${api}`);
        let res= await fetch(`https://api.unsplash.com//search/photos/?query=${type}&per_page=20&client_id=${api}`);
        let data = await res.json();
        
        
        // console.log(data)
        return data

        
    }catch(err){
    console.log(err)
    }
}
let append=(data,container)=>{
    data.forEach(({urls:{full}})=>{
        let div = document.createElement('div')
        div.setAttribute("class","image")
        let img= document.createElement('img')
        
        img.src=full;
        
        div.append(img)
        container.append(div)
    });
};



export {find,append}