const filterData = (value,list)=>{
    const temp = list.filter((item,index)=>{
        const created = item.created_at;
        const vals = created.split(' ');
        const tempStr = `${vals[1]}-${vals[3]}`;
        if(tempStr === value){
            return item;
        }
    })    
    return temp;
}

export default filterData;