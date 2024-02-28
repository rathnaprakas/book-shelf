import { useContext } from 'react';
import Bookcard from './components/bookcard';
import classes from './components/bookcard.module.css';
import ThemeContext from './store/context';



let App=()=>{
  let themecontext=useContext(ThemeContext)
  return <div id={themecontext.value==='light'?classes.light1:classes.dark1}>
    <Nav themecontext={themecontext}/>
    <BookList themecontext={themecontext}/>
  </div>
}

export default App;

let BookList=(props)=>{
  return <div className={classes.booklist}>
    {books.map((book)=>{return <Bookcard key={book.id} {...book} themecontext={props.themecontext}/>})}
  </div>
}

let Nav=(props)=>{
  return<nav className={classes.nav} id={props.themecontext.value==='light'?classes.light:classes.dark}>
  <div className={classes.logo}>
    <button onClick={props.themecontext.changeMode}>{props.themecontext.value==='light'?'Dark Mode':'Light Mode'}</button>
  </div>
</nav>
}

const books = [
  {
    id: 1,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbAf8C8_ahVQ3CQtfKPGMqsK1eZ4Nh4VYzsNmSPmVmCRon0dOdsm4ubrq0h_YnLJ_VEy7LaoWy0eSVr3psPr8zmh-73cssuq8HPk6yxW1qD0eG3TY83-OeXnk',
    title: 'A long and happy life',
    author: 'Hailey Mimosa',
  },

  {
    id: 2,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjqEXxdwFixezSb1jawTL6Hlo_uTMgwfr78wwa50-gqHvnTndYqrq3dPpoakVAsQE8heVcSBo3JeXH4n80D3fQX8GSkWhKYgo5F_oE_xqia4U1X6Awwu0Bzw&usqp=CAE',
    title: 'Atomic Habit',
    author: 'James Clear',
  },

  {
    id: 3,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJJCj00JjNySvuVHeqb5PrCMwyf-KpGpflQu-r06efUiFjrkDrJczdhGdmSiY55mUCO4AiDZUw-gpcMKypDvB9RXWlH3nSN0M-vmyzTRy5ciDGjyW1Pipvug&usqp=CAE',
    title: "Build Don't Talk",
    author: 'Raj Shamin',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjqEXxdwFixezSb1jawTL6Hlo_uTMgwfr78wwa50-gqHvnTndYqrq3dPpoakVAsQE8heVcSBo3JeXH4n80D3fQX8GSkWhKYgo5F_oE_xqia4U1X6Awwu0Bzw&usqp=CAE',
    title: 'Atomic Habit',
    author: 'James Clear',
  },

  {
    id: 5,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJJCj00JjNySvuVHeqb5PrCMwyf-KpGpflQu-r06efUiFjrkDrJczdhGdmSiY55mUCO4AiDZUw-gpcMKypDvB9RXWlH3nSN0M-vmyzTRy5ciDGjyW1Pipvug&usqp=CAE',
    title: "Build Don't Talk",
    author: 'Raj Shamin',
  },
  {
    id: 6,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbAf8C8_ahVQ3CQtfKPGMqsK1eZ4Nh4VYzsNmSPmVmCRon0dOdsm4ubrq0h_YnLJ_VEy7LaoWy0eSVr3psPr8zmh-73cssuq8HPk6yxW1qD0eG3TY83-OeXnk',
    title: 'A long and happy life',
    author: 'Hailey Mimosa',
  },

  {
    id: 7,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjqEXxdwFixezSb1jawTL6Hlo_uTMgwfr78wwa50-gqHvnTndYqrq3dPpoakVAsQE8heVcSBo3JeXH4n80D3fQX8GSkWhKYgo5F_oE_xqia4U1X6Awwu0Bzw&usqp=CAE',
    title: 'Atomic Habit',
    author: 'James Clear',
  },

  {
    id: 8,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJJCj00JjNySvuVHeqb5PrCMwyf-KpGpflQu-r06efUiFjrkDrJczdhGdmSiY55mUCO4AiDZUw-gpcMKypDvB9RXWlH3nSN0M-vmyzTRy5ciDGjyW1Pipvug&usqp=CAE',
    title: "Build Don't Talk",
    author: 'Raj Shamin',
  },
  {
    id: 9,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjqEXxdwFixezSb1jawTL6Hlo_uTMgwfr78wwa50-gqHvnTndYqrq3dPpoakVAsQE8heVcSBo3JeXH4n80D3fQX8GSkWhKYgo5F_oE_xqia4U1X6Awwu0Bzw&usqp=CAE',
    title: 'Atomic Habit',
    author: 'James Clear',
  },

  {
    id: 10,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJJCj00JjNySvuVHeqb5PrCMwyf-KpGpflQu-r06efUiFjrkDrJczdhGdmSiY55mUCO4AiDZUw-gpcMKypDvB9RXWlH3nSN0M-vmyzTRy5ciDGjyW1Pipvug&usqp=CAE',
    title: "Build Don't Talk",
    author: 'Raj Shamin',
  },
];

