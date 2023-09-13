

const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded ${props.className}`}>{props.children}</div>
  )
}

export default Card