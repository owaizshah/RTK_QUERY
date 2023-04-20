import classnames from "classnames";

function Skeleton({ times, className }) {
  const innerBox = classnames(
    " absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-slate-200 animate-shimmer"
  );

  const outerBox = classnames(
    "relative bg-gray-200 overflow-hidden",
    className
  );

  const rendered = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerBox}>
          <div className={innerBox} />
        </div>
      );
    });

  return rendered;
}

export default Skeleton;
