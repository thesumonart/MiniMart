const ProductFlag = ({ product }) => {
  return (
    <div className="absolute top-1.5 left-1.5 z-10 flex gap-1.5">
      {product.labels.map((label) => (
        <span
          key={`${product.id}-${label}`}
          className="rounded-lg bg-slate-800 px-1.5 py-1 text-sm text-white"
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default ProductFlag;
