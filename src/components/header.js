function Header(props) {
  const { image, title, description } = props;

  return (
    <header>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
