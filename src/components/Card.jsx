const Card=({image , title , description , buttonTxt})=>{
    return(
        <div className = {'w-[30%] flex flex-col justify-between mx-auto space-y-2'}>
            <img src={image} alt={title}/>
            <h3 className = {'font-bold texl-lg ml-1'}>{title}</h3>
            <p>{description}</p>
            <button className = {'border-4 border-blue-700 rounded-lg w-full text-blue-700'}>{buttonTxt}</button>
        </div>
    );
}
export default Card;