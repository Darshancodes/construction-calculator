export const ProductCard = ({
  product,
  isSelected,
  onSelect,
}: {
  product: any;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const hasMultipleImages = product.IMAGE2 && product.IMAGE2.trim() !== "";

  return (
    <div
      className={`bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "border-black shadow-md" : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center p-4 relative">
        {/* Radio button */}
        <div className="absolute top-3 right-3">
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-black bg-white" : "border-gray-300 bg-white"
            }`}
          >
            {isSelected && (
              <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            )}
          </div>
        </div>

        {/* Brand logo */}
        <div className="flex justify-center items-center mb-3 mt-2 w-full min-h-[80px]">
          {hasMultipleImages ? (
            // Display two images side by side with "Or"
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  src={product.IMAGE || "/placeholder.svg"}
                  alt={product.NAME}
                  className="max-w-full max-h-[60px] object-contain mb-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <span className="text-xs font-medium text-gray-700 text-center">
                  {product.NAME}
                </span>
              </div>

              <div className="flex items-center justify-center px-1">
                <span className="text-sm font-medium text-gray-400">Or</span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  src={product.IMAGE2 || "/placeholder.svg"}
                  alt={product.NAME2}
                  className="max-w-full max-h-[60px] object-contain mb-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <span className="text-xs font-medium text-gray-700 text-center">
                  {product.NAME2}
                </span>
              </div>
            </div>
          ) : (
            // Display single image with name below
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={product.IMAGE || "/placeholder.svg"}
                alt={product.NAME}
                className="max-w-full max-h-[80px] object-contain mb-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <span className="text-sm font-medium text-gray-700 text-center">
                {product.NAME}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
