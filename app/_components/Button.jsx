export default function Button({
  name,
  bg = "",
  textColour = "",
  border = "",
  href,
}) {
  const classes = `${bg} rounded-md p-2 px-4 ${textColour} font-medium ${border} hover:scale-105 transition ease-in-out duration-300 inline-flex justify-center items-center`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {name}
      </a>
    );
  }

  return <button className={classes}>{name}</button>;
}
