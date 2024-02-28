import classes from './bookcard.module.css'

let Bookcard=(props)=>{

    let clickHandler=()=>alert("Added to cart.")

    return <div className={classes.book} id={props.themecontext.value==='light'?classes.light:classes.dark}>
        <img src={props.img} alt=''></img>
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
        <button style={{ margin: '10px 10px 0 0' }} onClick={clickHandler}>Add to cart</button>
        <button>Favourite</button>
    </div>
}

export default Bookcard;