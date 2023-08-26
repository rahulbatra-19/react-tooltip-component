const Tooltip = ({ position, content }) => {
  return (
    <div className={`tooltip-${position}  tooltip`}>
      <span className="tooltipText">
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
