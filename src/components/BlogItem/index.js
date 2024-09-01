// Write your JS code here
const BlogItem = props => {
  const {each} = props
  const {title, description, publishedDate} = each
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
