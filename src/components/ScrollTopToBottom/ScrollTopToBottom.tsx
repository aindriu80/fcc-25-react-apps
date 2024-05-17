import { useRef } from 'react'
import UseCustomHook from '../CustomHook/CustomHook'

const ScrollTopToBottom = () => {
  const { data, error, pending } = UseCustomHook(
    'https://dummyjson.com/products?limit=100',
    {}
  )

  const bottomReference = useRef(null)

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  function handleScrollToBottom() {
    bottomReference.current.scrollIntoView({ behavior: 'smooth' })
  }

  if (error) {
    return <div className="">Error occurred! Please try again.</div>
  }

  if (pending) {
    return <div className="">Loading! Please wait...</div>
  }

  return (
    <div>
      <div className="">Scroll To Top And Bottom Feature</div>
      <div className="">This is the top section</div>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div className="" ref={bottomReference}>
        This is the bottom of the page
      </div>
    </div>
  )
}

export default ScrollTopToBottom
