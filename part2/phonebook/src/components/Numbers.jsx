import data from '../services/data'

const Numbers =({name,number,id}) =>{
    return(
        <li>{name}{number}
        <button onClick={()=>data.deletePhoneBook(id)} >Delete</button>
        </li>
    )
}

export default Numbers