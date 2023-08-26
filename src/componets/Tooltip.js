const Tooltip = ({ top, botttom, left, right, content }) => {
  return (
    <div
      style={{ top: top, bottom: botttom, left: left, right: right }}
      className="tooltip"
    >
      {content}
    </div>
  );
};

export default Tooltip;