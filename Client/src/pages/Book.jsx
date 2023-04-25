import { useSearchParams } from "react-router-dom";
import CardPayment from "../components/Cards/CardPayment";
import { useEffect } from "react";
const Book = ({route}) => {
  const [searchParams] = useSearchParams();
  useEffect(()=>{
    console.log(searchParams.get('id'));
  })
  return(
    <CardPayment id={searchParams.get('id')}/>
  )
}

export default Book;