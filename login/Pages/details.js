import Details from '@/component/Details/Details'
import Footer from '@/component/Footer/Footer'
import Comment from '@/component/Comment/Comment'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsById } from '@/Redux/actions/productActions';

const details = () => {

  const router = useRouter()
  const { data } = router.query
  const dispatch = useDispatch();
  const resData = useSelector(state => state.products)
  const { loading, error, idItems } = resData
  console.log(idItems, "items by ids")

  useEffect(() => {
    dispatch(fetchProductsById(data))
  }, [data])

  return (
    <>
      {idItems?.map((items, ides) => {
        return (
          <Details product={items} key={ides} />
        )
      })}
      <Comment />
      <Footer />
    </>
  )
}

export default details
